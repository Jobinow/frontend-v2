import { AfterViewInit, Component, ElementRef, OnInit, Signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionRequestInterface } from '@app/core/interfaces/requests/subscription-reaquest.interface';
import { selectUser } from '@app/ngrx/auth/auth.reducer';
import { paymentPageActions } from '@app/ngrx/payment/actions/payment-page.actions';
import { selectLoading } from '@app/ngrx/payment/payment.reducer';
import { selectSelectedPack } from '@app/ngrx/plans/plans.reducer';
import { Store } from '@ngrx/store';
import { Stripe, StripeCardElement, StripeCardNumberElement, loadStripe } from '@stripe/stripe-js';
import { environment } from 'environments/environment.development';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent implements AfterViewInit, OnInit {

  @ViewChild("cardElement") cardElement!: ElementRef;

  card!: StripeCardElement;

  stripe: Stripe | null = null;

  loading: Signal<boolean> = this._store.selectSignal(selectLoading);

  user = this._store.selectSignal(selectUser)
  pack = this._store.selectSignal(selectSelectedPack);

  constructor(private _store: Store, private _router: Router) {}

  ngOnInit(): void {
    this._store.dispatch(paymentPageActions.enter());
  }

  async initializeStripe(): Promise<Stripe | null> {
    if (!this.stripe) {
      this.stripe = await loadStripe(environment.STRIPE);
    }
    return this.stripe;
  }

  async ngAfterViewInit() {
    await this.initializeStripe();
    if (this.stripe) {
      this.card = this.stripe.elements().create("card");
      this.card.mount(this.cardElement.nativeElement);
      this.card.on("ready", () => {
        this._store.dispatch(paymentPageActions.pageLoadedSuccess())
      })
    }
  }

  submit = async () => {
    if (this.stripe) {
      await this.stripe.createToken(this.card).then(({token, error}) => {
        if (error) {
          console.warn(error);
        }

        const subRequest: SubscriptionRequestInterface = {
          pack: (this.pack()?.id as string),
          recruiter: (this.user()?.email as string),
          subscriptionStatus: "ACTIVE",
          chargeRequest: {
            amount: (this.pack()?.price as number),
            currency: "MAD",
            description: (this.pack()?.description as string),
            token: (token?.id as string)
          },
          cancellationReason: ""
        }
        
        this._store.dispatch(paymentPageActions.submitPayment(subRequest))
        this._router.navigateByUrl("/auth/verify");
      }).catch(error => {
        console.log(error);
      });
    }else {
      console.warn("stripe could not init");
    }
  }
}

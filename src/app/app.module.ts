import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ModulesModule } from '@modules/modules.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '@core/interceptors';
import { AngularToastifyModule } from 'angular-toastify';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthStateModule } from './ngrx/auth/auth.state.module';
import { PlansStateModule } from './ngrx/plans/plans.state.module';
import { EffectsModule } from '@ngrx/effects';
import { PaymentStateModule } from './ngrx/payment/payment.state.module';
import { JobOffersStateModule } from './ngrx/jobOffers/jobOffers.state.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    CoreModule,
    SharedModule,
    AngularToastifyModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), autoPause: true, trace: false, traceLimit: 75 }),
    AuthStateModule,
    PlansStateModule,
    PaymentStateModule,
    JobOffersStateModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

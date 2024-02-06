import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { JobOffersComponent } from './pages/job-offers/job-offers.component';
import { JobOfferCardComponent, JobPreviewCardComponent, JobOffersSearchComponent, JobOffersFiltersComponent } from './components';
import { ApplyPageComponent } from '@modules/home/pages/apply-page/apply-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    JobOffersComponent,
    JobOfferCardComponent,
    JobPreviewCardComponent,
    JobOffersSearchComponent,
    JobOffersFiltersComponent,
    ApplyPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }

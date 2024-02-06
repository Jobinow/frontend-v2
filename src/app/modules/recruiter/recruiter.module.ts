import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@modules/recruiter/pages/dashboard/dashboard.component';
import { HeaderComponent } from '@modules/recruiter/components';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { JobsComponent } from '@modules/recruiter/pages/jobs/jobs.component';
import { ApplicationsComponent } from '@modules/recruiter/pages/applications/applications.component';
import { CreateJobComponent } from '@modules/recruiter/pages/create-job/create-job.component';
import { JobsListComponent } from '@modules/recruiter/pages/jobs-list/jobs-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    JobsComponent,
    ApplicationsComponent,
    CreateJobComponent,
    JobsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class RecruiterModule { }

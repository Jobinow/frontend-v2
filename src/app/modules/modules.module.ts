import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from '@modules/modules-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@modules/home/home.module';
import { AuthModule } from '@modules/auth/auth.module';
import { RecruiterModule } from '@modules/recruiter/recruiter.module';
import { RouterModule } from '@angular/router';
import { PlansModule } from '@modules/plans/plans.module';
import { ErrorsModule } from '@modules/errors/errors.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    HomeModule,
    AuthModule,
    RecruiterModule,
    PlansModule,
    ErrorsModule,
    RouterModule
  ]
})
export class ModulesModule { }

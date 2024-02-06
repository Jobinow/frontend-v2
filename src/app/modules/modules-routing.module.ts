import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "@modules/home/pages/home/home.component";
import { JobOffersComponent } from "@modules/home/pages/job-offers/job-offers.component";
import { AuthComponent } from "@modules/auth/pages/auth/auth.component";
import { SignupComponent } from "@modules/auth/pages/signup/signup.component";
import { VerifyCodeComponent } from "./auth/pages/verify-code/verify-code.component";
import { DashboardComponent } from "./recruiter/pages/dashboard/dashboard.component";
import { JobsComponent } from "./recruiter/pages/jobs/jobs.component";
import { ApplicationsComponent } from "./recruiter/pages/applications/applications.component";
import { CreateJobComponent } from "./recruiter/pages/create-job/create-job.component";
import { JobsListComponent } from "./recruiter/pages/jobs-list/jobs-list.component";
import { ApplyPageComponent } from "./home/pages/apply-page/apply-page.component";
import { LoginComponent } from "@modules/auth/pages/login/login.component";
import { authenticationGuard, authorizationGuard } from "@core/guards";
import { NotAuthorizedPageComponent } from "./errors/pages/not-authorized-page/not-authorized-page.component";
import { NotFoundComponent } from "@modules/errors/pages/not-found/not-found.component";
import { PlansComponent } from "./plans/pages/plans/plans.component";
import { enableDebugTools } from "@angular/platform-browser";
import { CheckoutComponent } from "./plans/pages/checkout/checkout.component";
import { VerifyAccountComponent } from "./auth/pages/verify-account/verify-account.component";

const moduleRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "",
                redirectTo: "job-offers",
                pathMatch: "full",
            },
            {
                path: "job-offers",
                component: JobOffersComponent
            },
            {
                path: 'job-offers/:id/apply',
                component: ApplyPageComponent,
                canActivate: [authenticationGuard]
            }
        ]
    },
    {
        path: "auth",
        component: AuthComponent,
        children: [
            {
                path: "",
                component: SignupComponent
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "verify",
                component: VerifyCodeComponent
            },
            {
                path: ":id/verify-account/:code",
                component: VerifyAccountComponent
            }
        ]
    },
    {
        path: "recruiter",
        component: DashboardComponent,
        canActivate: [authenticationGuard, authorizationGuard],
        children: [
            {
                path: "",
                redirectTo: "jobs",
                pathMatch: "full",
            },
            {
                path: "jobs",
                component: JobsComponent,
                children: [
                    {
                        path: "",
                        component: JobsListComponent
                    },
                    {
                        path: "create-job",
                        component: CreateJobComponent
                    }
                ]
            },
            {
                path: "applications",
                component: ApplicationsComponent
            }
        ]
    },
    {
        path: "plans",
        component: PlansComponent
    },
    {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [authenticationGuard, authorizationGuard]
    },
    {
        path: "not-authorized",
        component: NotAuthorizedPageComponent,
        canActivate: [authenticationGuard]
    },
    {
        path: "not-found",
        component: NotFoundComponent
    },
    {
        path: "**",
        redirectTo: "not-found",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(moduleRoutes)],
    providers: [RouterModule]
})

export class ModulesRoutingModule {}
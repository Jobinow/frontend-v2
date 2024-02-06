import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { NotAuthorizedPageComponent } from '@modules/errors/pages/not-authorized-page/not-authorized-page.component';
import { NotFoundComponent } from '@modules/errors/pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        NotAuthorizedPageComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class ErrorsModule { }

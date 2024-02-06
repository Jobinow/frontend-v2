import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent, SearchBarComponent, ButtonComponent, SelectComponent, InputComponent, TableComponent } from '@components/index';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    TableComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    TableComponent,
    PaginationComponent
  ]
})
export class SharedModule { }

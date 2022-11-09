import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { FormBuilderComponent } from '../shared/shared/form-builder/form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInfoComponent } from './form-info/form-info.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    FormBuilderComponent,
    FormInfoComponent
  ]
})
export class HomeModule { }

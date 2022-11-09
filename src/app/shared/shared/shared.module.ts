import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './form-builder/form-builder.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SharedComponent,
    FormBuilderComponent
  ]
})
export class SharedModule { }

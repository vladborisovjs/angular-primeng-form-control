import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularPrimeFormControlComponent} from '../component/angular-prime-form-control.component';



@NgModule({
  declarations: [AngularPrimeFormControlComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AngularPrimeFormControlComponent
  ]
})
export class AngularPrimeFormControlModule { }

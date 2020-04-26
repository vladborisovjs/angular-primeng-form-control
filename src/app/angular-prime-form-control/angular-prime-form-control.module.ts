import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularPrimeFormControlComponent} from './angular-prime-form-control.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularPrimeFormControlService} from './angular-prime-form-control.service';
import {CheckboxModule, DropdownModule} from 'primeng';



@NgModule({
  declarations: [AngularPrimeFormControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CheckboxModule
  ],
  exports: [
    AngularPrimeFormControlComponent
  ],
  providers: [AngularPrimeFormControlService]
})
export class AngularPrimeFormControlModule { }

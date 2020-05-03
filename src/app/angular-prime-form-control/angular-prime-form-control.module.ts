import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularPrimeFormControlComponent} from './angular-prime-form-control.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularPrimeFormControlService} from './angular-prime-form-control.service';
import {CheckboxModule, DropdownModule, InputTextModule, SpinnerModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [AngularPrimeFormControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    SpinnerModule
  ],
  exports: [
    AngularPrimeFormControlComponent
  ],
  providers: [AngularPrimeFormControlService]
})
export class AngularPrimeFormControlModule { }

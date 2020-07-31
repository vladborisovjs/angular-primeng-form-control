import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VbPrimeFormComponent} from './components/vb-prime-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VbPrimeFormService} from './vb-prime-form.service';
import {
  CheckboxModule,
  DropdownModule, InputMaskModule, InputSwitchModule,
  InputTextModule, KeyFilterModule,
  MultiSelectModule,
  SpinnerModule,
  TriStateCheckboxModule
} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [VbPrimeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    CheckboxModule,
    TriStateCheckboxModule,
    SpinnerModule,
    InputSwitchModule,
    KeyFilterModule,
    InputMaskModule
  ],
  exports: [
    VbPrimeFormComponent
  ],
  providers: [VbPrimeFormService]
})
export class VbPrimeFormModule { }

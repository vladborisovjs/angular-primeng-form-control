import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularPrimeFormControlModule} from './angular-prime-form-control/module/angular-prime-form-control.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularPrimeFormControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

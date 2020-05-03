import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {AngularPrimeFormControlModule} from './angular-prime-form-control/angular-prime-form-control.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AngularPrimeFormControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

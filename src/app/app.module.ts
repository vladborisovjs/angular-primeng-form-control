import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {VbPrimeFormModule} from './vb-prime-form/vb-prime-form.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    VbPrimeFormModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TriStateCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

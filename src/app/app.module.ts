import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {VbPrimeFormModule} from './vb-prime-form/vb-prime-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    VbPrimeFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

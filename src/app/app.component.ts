import {Component, OnInit} from '@angular/core';
import {
  AngularPrimeFormControlService,
} from './angular-prime-form-control/angular-prime-form-control.service';
import {FormGroup} from '@angular/forms';
import {description} from './app-init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  form: FormGroup;

  constructor(private primeForm: AngularPrimeFormControlService) {}
  ngOnInit() {
    //this.form = this.primeForm.makeForm(description);
    //console.log(this.form);
    console.log(this.primeForm.makeForm(description));
  }
}

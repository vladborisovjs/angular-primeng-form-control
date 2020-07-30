import {Component, OnInit} from '@angular/core';
import {
  VbPrimeFormService,
} from './vb-prime-form/vb-prime-form.service';
import {FormGroup} from '@angular/forms';
import {description} from './app-init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  form: FormGroup;
  description = description;
  constructor(private primeForm: VbPrimeFormService) {}
  ngOnInit() {
    this.primeForm.makeForm(this.description);
    console.log(this.description);
  }
}

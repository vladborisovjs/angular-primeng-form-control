import {Component, OnInit} from '@angular/core';
import {
  AngularPrimeFormControlService,
} from './angular-prime-form-control/service/angular-prime-form-control.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  form: FormGroup;
  description = [
    {
      label: 'Операция',
      key: 'operation',
      type: 'text',
    },
    {
      label: 'Номер Операции',
      key: 'operation_number',
      type: 'number',
    },
    {
      label: 'Выбор операции',
      key: 'operation_select',
      type: 'select',
    },
    {
      label: 'Пароль операции',
      key: 'operation_password',
      type: 'password',
    }
  ];
  constructor(private primeForm: AngularPrimeFormControlService) {}
  ngOnInit() {
    this.form = this.primeForm.makeForm(this.description);
    console.log(this.form);
  }
}

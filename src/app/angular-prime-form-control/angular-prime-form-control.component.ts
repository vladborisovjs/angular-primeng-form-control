import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-prime-form-control',
  templateUrl: './angular-prime-form-control.component.html',
  styleUrls: ['./angular-prime-form-control.component.scss']
})
export class AngularPrimeFormControlComponent implements OnInit {
  @Input() type:
    'text' |
    'password' |
    'number' |
    'textarea' |
    'select'  = 'text';
  @Input() key: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required: string;
  @Input() options: any; // array of object for type select
  @Input() params: { // additional attributes for fields
    maxVal: number; // max value for type number
    minVal: number; // min value for type number
    rows: number; // rows for type textarea
    cols: number; // columns for type textarea
    filter: boolean; // filter for type select
    showClear: boolean; // clear for type select
  };
  val: number;
  selectedItem: string;

  constructor() { }

  ngOnInit(): void {
  }

}

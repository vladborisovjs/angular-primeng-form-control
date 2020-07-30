import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'vb-prime-form',
  templateUrl: './vb-prime-form.component.html',
  styleUrls: ['./vb-prime-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VbPrimeFormComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VbPrimeFormComponent implements OnInit, ControlValueAccessor {
  // todo calendar, radio, keyfilter, mask
  @Input() type:
    'text' |
    'password' |
    'number' |
    'textarea' |
    'checkbox' |
    'tricheckbox' |
    'select'  = 'text';
  @Input() key: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required: string;
  @Input() options: any; // array of object for type select
  @Input() params: { // additional attributes for fields
    maxVal?: number; // max value for type number
    minVal?: number; // min value for type number
    step?: number; // step value for type number
    rows?: number; // rows for type textarea
    cols?: number; // columns for type textarea
    filter?: boolean; // filter for type select
    showClear?: boolean; // clear for type select
  };
  _value: any;

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    this._value = v;
    this.onModelChange(v);
  }

  selectedItem: string;

  constructor() { }
  public onModelChange: any = () => {
  }
  public onModelTouched: any = () => {
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.value = obj;
    }
  }

  onInputBlur(event) {
    this.onModelTouched();
  }

  ngOnInit(): void {
  }

}

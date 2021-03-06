import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
  @Input() type:
    'text' |
    'password' |
    'number' |
    'textarea' |
    'checkbox' |
    'triCheckbox' |
    'multiSelect' |
    'inputSwitch' |
    'select'  = 'text';
  @Input() key: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() options: any; // array of object for type select
  @Input() params?: { // additional attributes for fields
    maxVal?: number; // max value for type number
    minVal?: number; // min value for type number
    maxDate?: Date; // max date for calendar
    minDate?: Date; // min date for calendar
    step?: number; // step value for type number
    rows?: number; // rows for type textarea
    cols?: number; // columns for type textarea
    filter?: boolean; // filter for type select
    showClear?: boolean; // clear for type select
    defaultLabel?: string; // label (no selected) for type multiSelect
    mask?: string; // mask for input field
    pKeyFilter?:
      'pint' | // Positive integers
      'int' | // Integers
      'pnum' | // Positive numbers
      'num' | // Numbers
      'hex' | // Hexadecimal
      'email' | // Email
      'alpha' | // Alphabetic
      'alphanum'; // Alphanumeric
  };
  val: any;
  regExpMatchAll: RegExp = /.*/;
  required = false;
  ru = {
    firstDayOfWeek: 1,
    dayNames: ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    today: 'Сегодня',
    clear: 'Очистить'
  };
  get value(): any {
    return this.val;
  }

  set value(v: any) {
    this.val = v;
    this.onModelChange(v);
  }
  isDisabled = false;
  selectedItem: string;
  selectedItems: any[];
  constructor() { }
  public onModelChange: any = () => {}
  public onModelTouched: any = () => {}

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  writeValue(obj: any): void {
    if (obj !== undefined && obj !== null) {
      this.value = obj;
    } else {
      this.value = '';
    }
  }

  formateDateToISO(obj) {
    if (obj) {
      this.value = obj.toISOString();
    }
  }

  rangeYear() {
    const startYearNav = (new Date().getFullYear() - 100).toString();
    const endYearNav = new Date().getFullYear().toString();
    return startYearNav + ':' + endYearNav;
  }

  onInputBlur(event) {
    this.onModelTouched();
  }

  ngOnInit(): void {
    if (!this.placeholder) {
      const verb = this.type === 'select' ? 'Выберите' : 'Введите';
      this.placeholder = `${verb} ${this.label.toLowerCase()}`;
    }
  }

}

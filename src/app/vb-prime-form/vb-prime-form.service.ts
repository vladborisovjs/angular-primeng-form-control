import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class VbPrimeFormService {

  constructor() { }
  makeForm(description): FormGroup {
    const nestedFg = [];
    const fg = new FormGroup({});
    for (const group in description) {
      nestedFg.push(new FormGroup({}));
      for (let i = 0; i < description[`${group}`].length; i++) {
        const validators = [];
        if (description[`${group}`][i].required) {
          validators.push(Validators.required);
        }
        const fc = new FormControl(null, validators);
        nestedFg[nestedFg.length - 1].addControl(description[`${group}`][i].key, fc);
      }
      fg.addControl(group, nestedFg[nestedFg.length - 1]);
    }
    return fg;
  }
}

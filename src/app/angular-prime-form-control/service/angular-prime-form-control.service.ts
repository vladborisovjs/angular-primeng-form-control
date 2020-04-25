import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class AngularPrimeFormControlService {

  constructor() { }

  makeForm(description, fg: FormGroup = new FormGroup({})): FormGroup {
    if (!fg) {
      fg = new FormGroup({});
    }
    description.forEach(group => {
      group.forEach(control => {
        console.log(control);
      });
      // const validators = [];
      // if (el.required) {
      //   validators.push(Validators.required);
      // }
      // if (fg.get(el.key)) {
      // } else {
      //   fg.setControl(el.key, new FormControl(null, validators));
      // }
    });
    return fg;
  }

  // getBlockDescriptions(block: string) {
  //   return this.descriptions.filter(el => {
  //     if (el.additional) {
  //       return el.additional.block === block;
  //     }
  //     return false;
  //   });
  // }
}

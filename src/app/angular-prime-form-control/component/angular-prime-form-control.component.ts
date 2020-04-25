import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-prime-form-control',
  templateUrl: './angular-prime-form-control.component.html',
  styleUrls: ['./angular-prime-form-control.component.scss']
})
export class AngularPrimeFormControlComponent implements OnInit {
  @Input() type: string;
  @Input() key: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required: string;
  constructor() { }

  ngOnInit(): void {
  }

}

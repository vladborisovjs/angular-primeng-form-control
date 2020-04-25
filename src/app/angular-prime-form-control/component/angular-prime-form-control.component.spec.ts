import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPrimeFormControlComponent } from './angular-prime-form-control.component';

describe('AngularPrimeFormControlComponent', () => {
  let component: AngularPrimeFormControlComponent;
  let fixture: ComponentFixture<AngularPrimeFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPrimeFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPrimeFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

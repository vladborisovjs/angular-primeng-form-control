import { TestBed } from '@angular/core/testing';

import { AngularPrimeFormControlService } from './angular-prime-form-control.service';

describe('AngularPrimeFormControlService', () => {
  let service: AngularPrimeFormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularPrimeFormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

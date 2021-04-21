import { TestBed } from '@angular/core/testing';

import { CalculadoraBinariaService } from './calculadora-binaria.service';

describe('CalculadoraBinariaService', () => {
  let service: CalculadoraBinariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraBinariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

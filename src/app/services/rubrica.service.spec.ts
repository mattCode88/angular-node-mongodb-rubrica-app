import { TestBed } from '@angular/core/testing';

import { RubricaService } from './rubrica.service';

describe('RubricaService', () => {
  let service: RubricaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubricaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ComposantPcService } from './composant-pc.service';

describe('ComposantPcService', () => {
  let service: ComposantPcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposantPcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

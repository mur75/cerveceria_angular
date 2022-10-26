import { TestBed } from '@angular/core/testing';

import { DescriocionIndividualService } from './descriocion-individual.service';

describe('DescriocionIndividualService', () => {
  let service: DescriocionIndividualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriocionIndividualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

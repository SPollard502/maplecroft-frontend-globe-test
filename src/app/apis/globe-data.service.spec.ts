import { TestBed } from '@angular/core/testing';

import { GlobeDataService } from './globe-data.service';

describe('GlobeDataService', () => {
  let service: GlobeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

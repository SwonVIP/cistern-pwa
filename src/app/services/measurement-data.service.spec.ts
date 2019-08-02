import { TestBed } from '@angular/core/testing';

import { MeasurementDataService } from './measurement-data.service';

describe('MeasurementDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeasurementDataService = TestBed.get(MeasurementDataService);
    expect(service).toBeTruthy();
  });
});

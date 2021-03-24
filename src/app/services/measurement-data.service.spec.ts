import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MeasurementDataService } from './measurement-data.service';
import { Measurement } from '../model/measurement';

describe('MeasurementDataService', () => {

  const receivedDummyMeasurement: Measurement = {
    waterlevel_perc:  20,
    waterlevel_litre: 1000,
    Unique_ID: "",
    timestamp: new Date()
  }


  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: MeasurementDataService = TestBed.get(MeasurementDataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MeasurementDataService } from './measurement-data.service';
import { Measurement } from '../model/measurement';

describe('MeasurementDataService', () => {
  let httpMock: HttpTestingController;
  let service: MeasurementDataService;
  const dummyMeasurement: Measurement = {
    waterlevel_perc:  20,
    waterlevel_litre: 1000,
    Unique_ID: "",
    timestamp: new Date()
  }


  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MeasurementDataService]
  })
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MeasurementDataService);
  });

  it('should be created', () => {
    const service: MeasurementDataService = TestBed.get(MeasurementDataService);
    expect(service).toBeTruthy();
  });

  it('should GET a measurement from the webservice', () => {
    let receivedMeasurement = <Measurement>{};
    service.getMeasurements().subscribe(measurement => receivedMeasurement = measurement);

    const req = httpMock.expectOne('https://apis.fammerz.de/cistern-monitoring/jsonapi.php?UniqueID=CC:50:E3:3B:F5:8B');
    expect(req.request.method).toEqual('GET');
    req.flush(dummyMeasurement);
    expect(receivedMeasurement).toEqual(dummyMeasurement);
  });

  afterEach( () => {
    httpMock.verify();
  })
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MeasurementDataService } from './measurement-data.service';
import { Measurement } from '../model/measurement';
import { SaveConfigService } from './save-config.service';

describe('MeasurementDataService', () => {
  let httpMock: HttpTestingController;
  let service: MeasurementDataService;
  let saveConfigServiceMock: jasmine.SpyObj<SaveConfigService>;;

  const dummyMeasurement: Measurement = {
    waterlevel_perc:  20,
    waterlevel_litre: 1000,
    Unique_ID: "",
    timestamp: new Date()
  }


  beforeEach(() => {
    
    // Always get dummy key from service via mock object
    saveConfigServiceMock = jasmine.createSpyObj(['getExisitingKeyFromStorage']);
    saveConfigServiceMock.getExisitingKeyFromStorage.and.returnValue('CC:50:E3:3B:F5:8B');

    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MeasurementDataService, {
      provide: SaveConfigService, useValue: saveConfigServiceMock
    }]
  })
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MeasurementDataService);
    saveConfigServiceMock = TestBed.inject(SaveConfigService) as jasmine.SpyObj<SaveConfigService>;
  });

  it('should be created', () => {
    const service = TestBed.inject(MeasurementDataService);
    expect(service).toBeTruthy();
  });

  it('should GET a measurement from the webservice', () => {
    localStorage.removeItem("key");
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

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { Measurement } from '../model/measurement';
import { MeasurementDataService } from '../services/measurement-data.service';
import { MeasurementsComponent } from './measurements.component';

describe('MeasurementsComponent', () => {
  let component: MeasurementsComponent;
  let fixture: ComponentFixture<MeasurementsComponent>;

  const receivedDummyMeasurement: Measurement = {
    waterlevel_perc:  20,
    waterlevel_litre: 1000,
    Unique_ID: "test",
    timestamp: new Date()
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: MeasurementDataService,
        useValue: {getMeasurements: () => of(receivedDummyMeasurement)}
      },
      ],
      declarations: [MeasurementsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display measurement', () => {
    let receivedMeasurement = <Measurement>{};
    component.measurement$.subscribe(measurement => receivedMeasurement = measurement)
    expect(receivedMeasurement).toEqual(receivedDummyMeasurement)
  });
});

import { Component, OnInit } from '@angular/core';
import { Measurement } from '../model/measurement';
import { MeasurementDataService } from '../services/measurement-data.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

  measurements: Measurement[];

  constructor(private measurementDataService: MeasurementDataService) { }

  ngOnInit() {
    this.getMeasurements();
  }

  getMeasurements(): void {
    this.measurementDataService.getMeasurements()
        .subscribe(measurements => this.measurements = measurements);
  }
}

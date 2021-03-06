import { Component, Input, OnInit } from '@angular/core';
import { Measurement } from '../model/measurement';
import { MeasurementDataService } from '../services/measurement-data.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

  measurement: Measurement | undefined;
  interval: any;

  constructor(private measurementDataService: MeasurementDataService) {
  }

  //TODO improve by removing interval and adding websocket connection
  //TODO make interval customizable in settings dialog
  ngOnInit() {
    this.getMeasurements();
    this.interval = setInterval(() => {
      this.getMeasurements();
    }, 60000);
  }

  getMeasurements(): void {
    this.measurementDataService.getMeasurements()
      .subscribe(
        (measurement) => {
          this.measurement = measurement;
        },
        (err) => console.error(err)
      );
  }

}

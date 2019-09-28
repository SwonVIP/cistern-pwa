import { Component, OnInit } from '@angular/core';
import { Measurement } from '../app/model/measurement';
import { MeasurementDataService } from '../app/services/measurement-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'cistern-pwa'
  measurements: Measurement;
  
  constructor(private measurementDataService: MeasurementDataService) {
  }

  ngOnInit() {
    this.getMeasurements();
  }

  getMeasurements(): void {

    this.measurementDataService.getMeasurements()
        .subscribe(
          (measurements) => {
            this.measurements = measurements;
          },
          (err) => console.error(err)
        );
  }
}

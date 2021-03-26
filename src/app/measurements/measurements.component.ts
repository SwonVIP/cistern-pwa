import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Measurement } from '../model/measurement';
import { MeasurementDataService } from '../services/measurement-data.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

  measurement$!: Observable<Measurement>;
  interval: any;

  constructor(private measurementDataService: MeasurementDataService) {
  }

  ngOnInit() {
    // First init call to show data after load
    this.getMeasurementsFromService();

    // Regulary fetch data from webservice
    //TODO improve by removing interval and adding websocket connection
    //TODO make interval customizable in settings dialog
    this.interval = setInterval(() => {
      this.getMeasurementsFromService();
    }, 60000);
  }

  getMeasurementsFromService() {
    this.measurement$ = this.measurementDataService.getMeasurements();
  }
}

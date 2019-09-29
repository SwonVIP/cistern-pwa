import { Component, Input, OnInit} from '@angular/core';
import { Measurement } from '../model/measurement';
import { MeasurementDataService } from '../services/measurement-data.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit{

  measurement: Measurement;
  interval:any;

  constructor(private measurementDataService: MeasurementDataService) {
  }

//TODO improve by removing interval and adding websocket connection
//TODO make interval customizable in settings dialog
  ngOnInit() {
    this.getMeasurements();
    this.interval = setInterval(() => { 
        this.getMeasurements(); 
    }, 5000);
}

getMeasurements(): void {
  console.log("executed");
  this.measurementDataService.getMeasurements()
      .subscribe(
        (measurement) => {
          this.measurement = measurement;
        },
        (err) => console.error(err)
      );
}

}

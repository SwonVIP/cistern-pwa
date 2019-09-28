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
  interval:any;
  
  constructor(private measurementDataService: MeasurementDataService) {
  }

  //TODO improve by removing interval and adding websocket connection
  //TODO make interval customizable in settings dialog
  ngOnInit() {
      console.log("sdsd");
      this.getMeasurements();
      this.interval = setInterval(() => { 
          this.getMeasurements(); 
      }, 5000);
  }

  getMeasurements(): void {
    console.log("executed");
    this.measurementDataService.getMeasurements()
        .subscribe(
          (measurements) => {
            this.measurements = measurements;
          },
          (err) => console.error(err)
        );
  }
}

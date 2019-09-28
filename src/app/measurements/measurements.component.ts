import { Component, Input} from '@angular/core';
import { Measurement } from '../model/measurement';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent{

  @Input() measurement: Measurement;

}

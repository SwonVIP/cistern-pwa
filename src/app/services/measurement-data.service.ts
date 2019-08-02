import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Measurement } from '../model/measurement';
import { MEASUREMENTS } from '../data/mock-measurements';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementDataService {

  constructor(private messageService: MessageService) { }

  getMeasurements(): Observable<Measurement[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('MeasurementDataService: fetched data');
    return of(MEASUREMENTS);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Measurement } from '../model/measurement';
import { MessageService } from './message.service';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasurementDataService {
  // Default demo key
  private key: string | any = "CC:50:E3:3B:F5:8B";
  private measurementDataUrl: string = "";

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // TODO Move config values to own service and call getMeasurement with finalRequestURL
  getMeasurements(): Observable<Measurement> {
    if (localStorage.getItem('key')) {
      this.key = localStorage.getItem('key');
    }
    this.measurementDataUrl = 'https://apis.fammerz.de/cistern-monitoring/jsonapi.php?UniqueID=' + this.key;

    this.messageService.add('MeasurementDataService: fetched data');
    return this.http.get<Measurement>(this.measurementDataUrl)
      .pipe(
        tap(_ => this.log('fetched measurements')),
        catchError(this.handleError<Measurement>('getMeasurements')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`MeasurementDataService: ${message}`);
  }
}

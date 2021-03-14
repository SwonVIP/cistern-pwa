import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Measurement } from '../model/measurement';
import { MessageService } from './message.service';

import { HttpClient, HttpParams } from '@angular/common/http';
import { SaveConfigService } from './save-config.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementDataService {
  // Default demo key
  private key: string;
  private api: string = "https://apis.fammerz.de";

  constructor(private http: HttpClient, private messageService: MessageService, private saveConfigService: SaveConfigService) {
    this.key = this.saveConfigService.getExisitingKeyFromStorage();
   }

  getMeasurements(): Observable<Measurement> {

    const params = new HttpParams({
      fromObject: {
        UniqueID: this.key
      }
    })

    this.messageService.add('MeasurementDataService: fetched data');
    return this.http.get<Measurement>(`${this.api}/cistern-monitoring/jsonapi.php`,{ params })
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

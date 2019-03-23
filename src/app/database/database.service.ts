import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

/**
 * proxy for database or POST api
 */
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  save<T>(entity:T):Observable<T> {
    console.log('saved: ',entity);
    return of(entity);
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EndPoint } from './end-point.enum';
import { environment } from '../../environments/environment';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/operators';

const mockUrl = '/assets/mock';

/**
 * api client proxy for switching between production/mock usecase.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:Http) { }

   get<T> (endpoint:EndPoint,params?:{[key:string]:any}):Observable<T> {
    let path:string = endpoint;
    if(environment.mock) {
      path = mockUrl + endpoint + '.json';
    }
    return this.httpClient.get(path,{
      params
    }).pipe(map(res=><T>res.json()));
  }
}

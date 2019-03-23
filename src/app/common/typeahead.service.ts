import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { TypeaheadResult } from './typeahead-result';
import { EndPoint } from '../api/end-point.enum';
import { map } from '../../../node_modules/rxjs/operators';
import * as moment from '../../../node_modules/moment';

@Injectable({
  providedIn: 'root'
})
export class TypeaheadService {

  constructor(private api:ApiService) { }

  typeahead(input:string):Observable<Array<TypeaheadResult>> {
    return this.api.get<Array<{label:string,value:string}>>(EndPoint.TYPEAHEAD,{input}).pipe(map((res)=>{
      return res.map(r=>({
        label:r.label,
        value:moment(r.value)
      }));
    }));
  }
}

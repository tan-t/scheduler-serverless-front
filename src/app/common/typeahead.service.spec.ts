import { TestBed } from '@angular/core/testing';

import { TypeaheadService } from './typeahead.service';
import { EndPoint } from '../api/end-point.enum';
import { Observable, of } from '../../../node_modules/rxjs';

class MockApiService {
  get:<T>(endpoint:EndPoint,params?:{[key:string]:any})=>Observable<T>;
}

describe('TypeaheadService', () => {
  let mock;
  beforeEach(() => {
    TestBed.configureTestingModule({})
    mock = new MockApiService();
  });

  it('should be created', () => {
    const service: TypeaheadService = new TypeaheadService(mock);
    mock.get = (endpoint:EndPoint,params?:{[key:string]:any}) => {
      return of([{}]);
    }

    expect(service).toBeTruthy();
  });
});

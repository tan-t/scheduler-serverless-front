import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpModule } from '../../../node_modules/@angular/http';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpModule ],

  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

});

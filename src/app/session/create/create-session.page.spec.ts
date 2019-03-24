import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSessionPage } from './create-session.page';
import { ModalController, IonicModule } from '../../../../node_modules/@ionic/angular';
import { TypeaheadService } from '../../common/typeahead.service';
import { Observable, of } from '../../../../node_modules/rxjs';
import { TypeaheadResult } from '../../common/typeahead-result';

class TypeaheadServiceMock {
  typeahead(input: string): Observable<Array<TypeaheadResult>> {
    return of([]);
  }
}

describe('CreateSessionPage', () => {
  let component: CreateSessionPage;
  let fixture: ComponentFixture<CreateSessionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSessionPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()],
      providers: [
        CreateSessionPage,
        { provide: TypeaheadService, useClass: TypeaheadServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

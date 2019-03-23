import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleInputModalComponent } from './title-input-modal.component';

describe('TitleInputModalComponent', () => {
  let component: TitleInputModalComponent;
  let fixture: ComponentFixture<TitleInputModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleInputModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleInputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

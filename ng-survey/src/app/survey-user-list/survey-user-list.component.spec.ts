import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyUserListComponent } from './survey-user-list.component';

describe('SurveyUserListComponent', () => {
  let component: SurveyUserListComponent;
  let fixture: ComponentFixture<SurveyUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

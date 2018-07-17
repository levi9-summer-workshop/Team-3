import { TestBed, inject } from '@angular/core/testing';
import { SurveyUserService } from './survey-user.service';



describe('SurveyUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyUserService]
    });
  });

  it('should be created', inject([SurveyUserService], (service: SurveyUserService) => {
    expect(service).toBeTruthy();
  }));
});

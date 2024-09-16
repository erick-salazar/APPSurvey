import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysReportsComponent } from './surveys-reports.component';

describe('SurveysReportsComponent', () => {
  let component: SurveysReportsComponent;
  let fixture: ComponentFixture<SurveysReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveysReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveysReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

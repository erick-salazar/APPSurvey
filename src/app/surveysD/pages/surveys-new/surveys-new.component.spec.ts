import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysNewComponent } from './surveys-new.component';

describe('SurveysNewComponent', () => {
  let component: SurveysNewComponent;
  let fixture: ComponentFixture<SurveysNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveysNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveysNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

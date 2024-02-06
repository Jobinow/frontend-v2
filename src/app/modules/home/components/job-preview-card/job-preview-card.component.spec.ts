import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPreviewCardComponent } from './job-preview-card.component';

describe('JobPreviewCardComponent', () => {
  let component: JobPreviewCardComponent;
  let fixture: ComponentFixture<JobPreviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobPreviewCardComponent]
    });
    fixture = TestBed.createComponent(JobPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

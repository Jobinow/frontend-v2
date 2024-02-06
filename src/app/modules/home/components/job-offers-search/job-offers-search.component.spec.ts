import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersSearchComponent } from './job-offers-search.component';

describe('JobOffersSearchComponent', () => {
  let component: JobOffersSearchComponent;
  let fixture: ComponentFixture<JobOffersSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOffersSearchComponent]
    });
    fixture = TestBed.createComponent(JobOffersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

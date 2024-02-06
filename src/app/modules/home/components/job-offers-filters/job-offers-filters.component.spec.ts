import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersFiltersComponent } from './job-offers-filters.component';

describe('JobOffersFiltersComponent', () => {
  let component: JobOffersFiltersComponent;
  let fixture: ComponentFixture<JobOffersFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOffersFiltersComponent]
    });
    fixture = TestBed.createComponent(JobOffersFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

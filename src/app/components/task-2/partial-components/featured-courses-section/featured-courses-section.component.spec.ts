import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCoursesSectionComponent } from './featured-courses-section.component';

describe('FeaturedCoursesSectionComponent', () => {
  let component: FeaturedCoursesSectionComponent;
  let fixture: ComponentFixture<FeaturedCoursesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCoursesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCoursesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

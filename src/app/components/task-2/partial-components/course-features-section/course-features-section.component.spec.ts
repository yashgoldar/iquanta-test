import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFeaturesSectionComponent } from './course-features-section.component';

describe('CourseFeaturesSectionComponent', () => {
  let component: CourseFeaturesSectionComponent;
  let fixture: ComponentFixture<CourseFeaturesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFeaturesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

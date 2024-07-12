import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentSectionComponent } from './course-content-section.component';

describe('CourseContentSectionComponent', () => {
  let component: CourseContentSectionComponent;
  let fixture: ComponentFixture<CourseContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseContentSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

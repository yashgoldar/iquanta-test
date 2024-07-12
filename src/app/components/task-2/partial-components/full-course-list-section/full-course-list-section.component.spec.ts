import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCourseListSectionComponent } from './full-course-list-section.component';

describe('FullCourseListSectionComponent', () => {
  let component: FullCourseListSectionComponent;
  let fixture: ComponentFixture<FullCourseListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullCourseListSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCourseListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

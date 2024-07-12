import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppersFeedbackSectionComponent } from './toppers-feedback-section.component';

describe('ToppersFeedbackSectionComponent', () => {
  let component: ToppersFeedbackSectionComponent;
  let fixture: ComponentFixture<ToppersFeedbackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToppersFeedbackSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppersFeedbackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

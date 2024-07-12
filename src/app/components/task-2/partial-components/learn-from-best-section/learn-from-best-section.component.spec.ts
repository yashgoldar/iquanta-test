import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFromBestSectionComponent } from './learn-from-best-section.component';

describe('LearnFromBestSectionComponent', () => {
  let component: LearnFromBestSectionComponent;
  let fixture: ComponentFixture<LearnFromBestSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnFromBestSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnFromBestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

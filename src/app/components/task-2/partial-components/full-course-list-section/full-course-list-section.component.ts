import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-full-course-list-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-course-list-section.component.html',
  styleUrls: ['./full-course-list-section.component.scss']
})
export class FullCourseListSectionComponent {
public isVisible:boolean = false;
}

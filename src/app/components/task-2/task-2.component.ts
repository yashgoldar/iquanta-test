import { Component } from '@angular/core';
import { YoutubeSectionComponent } from './partial-components/youtube-section/youtube-section.component';
import { FullCourseListSectionComponent } from './partial-components/full-course-list-section/full-course-list-section.component';
import { CourseFeaturesSectionComponent } from './partial-components/course-features-section/course-features-section.component';
import { BannerSectionComponent } from './partial-components/banner-section/banner-section.component';
import { CourseContentSectionComponent } from './partial-components/course-content-section/course-content-section.component';
import { LearnFromBestSectionComponent } from './partial-components/learn-from-best-section/learn-from-best-section.component';
import { ToppersFeedbackSectionComponent } from './partial-components/toppers-feedback-section/toppers-feedback-section.component';
import { FeaturedCoursesSectionComponent } from './partial-components/featured-courses-section/featured-courses-section.component';
import { RightSidebarComponent } from './partial-components/right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-task-2',
  standalone: true,
  imports: [FeaturedCoursesSectionComponent,ToppersFeedbackSectionComponent,LearnFromBestSectionComponent,CourseContentSectionComponent,YoutubeSectionComponent, FullCourseListSectionComponent, CourseFeaturesSectionComponent, BannerSectionComponent,RightSidebarComponent],
  templateUrl: './task-2.component.html',
  styleUrls: ['./task-2.component.scss']
})
export class Task2Component {

}

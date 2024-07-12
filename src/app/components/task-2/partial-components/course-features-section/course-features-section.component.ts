import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-features-section.component.html',
  styleUrls: ['./course-features-section.component.scss']
})
export class CourseFeaturesSectionComponent {

  public dataset = [
    {
      colorID: 'quant',
      heading: 'QUANT',
      content:[
        {
          text: '● 400+ hours of Live'
        },
        {
          text: 'Interactive Sessions'
        },
        {
          text: '● 1000+Recorded Videos'
        },
        {
          text: '● 40 Assignments'
        }
      ]
    },
    {
      colorID: 'varc',
      heading: 'VARC',
      content:[
        {
          text: '● 260+ hours of Live'
        },
        {
          text: 'Interactive Sessions'
        },
        {
          text: '● 250+ Recorded Videos'
        },
        {
          text: '● 30 Assignments'
        }
      ]
    },
    {
      colorID: 'lrdi',
      heading: 'LRDI',
      content:[
        {
          text: '● 260+ hours of Live'
        },
        {
          text: 'Interactive Sessions'
        },
        {
          text: '● 300+ Recorded Videos'
        },
        {
          text: '● 30 Assignments'
        }
      ]
    },
    {
      colorID: 'practice',
      heading: 'PRACTICE',
      content:[
        {
          text: '● 3000+ Quant Qs'
        },
        {
          text: '● 2500+ VARC Qs'
        },
        {
          text: '● 2500+ LRDI Qs'
        },
        {
          text: 'Available anytime.'
        }
      ]
    },
    {
      colorID: 'mocks',
      heading: 'MOCKS',
      content:[
        {
          text: '● 20 CAT Full Mocks'
        },
        {
          text: '● 45 Sectionals'
        },
        {
          text: '● 15 Non-CAT Mock (XAT,IIFT,SNAP,NMAT etc)'
        }
      ]
    },
    {
      colorID: 'timings',
      heading: 'TIMINGS',
      content:[
        {
          text: '● 10 PM to 12 AM'
        },
        {
          text: '● 7 PM to 9 PM'
        },
        {
          text: '● 6 Days a Week (9 classes)'
        },
        {
          text: '-2 Days QA, VARC & LRDI each'
        }
      ]
    }
  ]
}

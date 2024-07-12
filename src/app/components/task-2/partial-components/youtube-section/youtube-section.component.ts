import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-section',
  standalone: true,
  imports: [],
  templateUrl: './youtube-section.component.html',
  styleUrls: ['./youtube-section.component.scss']
})
export class YoutubeSectionComponent {
  public url = "https://www.youtube.com/embed/KfcUp4gTVWE?autoplay=1&mute=1&loop=1&modestbranding=1&rel=0&fs=0&playlist=Ma8sM01hBO0";

  // Declare the sanitized URL
  public safeUrl: SafeResourceUrl;

  // Inject DomSanitizer in the constructor
  constructor(public sanitizer: DomSanitizer) {
    // Sanitize the URL

    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}

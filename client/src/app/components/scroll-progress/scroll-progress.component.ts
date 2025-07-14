// app/components/scroll-progress/scroll-progress.component.ts
import { Component, HostListener, OnInit, signal, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-progress.component.html',
})
export class ScrollProgressComponent implements OnInit {
  scrollProgress = signal(0);
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateScrollProgress();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isBrowser) {
      this.updateScrollProgress();
    }
  }

  private updateScrollProgress() {
    if (!this.isBrowser) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    this.scrollProgress.set(Math.min(progress, 100));
  }
}

import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-progress.component.html'
})
export class ScrollProgressComponent implements OnInit {
  scrollProgress = signal(0);

  ngOnInit() {
    this.updateScrollProgress();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateScrollProgress();
  }

  private updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    this.scrollProgress.set(Math.min(progress, 100));
  }
}

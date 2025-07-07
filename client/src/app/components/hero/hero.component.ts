import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = signal('');
  private fullText = "Hello, I'm Michael";
  private currentIndex = 0;
  private typingInterval?: number;

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  private startTypingAnimation() {
    this.typingInterval = window.setInterval(() => {
      if (this.currentIndex < this.fullText.length) {
        this.typedText.update(text => text + this.fullText.charAt(this.currentIndex));
        this.currentIndex++;
      } else {
        // Reset and repeat
        setTimeout(() => {
          this.typedText.set('');
          this.currentIndex = 0;
        }, 2000);
      }
    }, 100);
  }

  scrollToSection(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

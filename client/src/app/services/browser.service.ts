
// app/services/browser.service.ts - Optional helper service
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  safeWindow(): Window | undefined {
    return this.isBrowser ? window : undefined;
  }

  safeDocument(): Document | undefined {
    return this.isBrowser ? document : undefined;
  }

  safeSetInterval(callback: () => void, delay: number): number | undefined {
    return this.isBrowser ? window.setInterval(callback, delay) : undefined;
  }

  safeClearInterval(intervalId: number | undefined): void {
    if (this.isBrowser && intervalId) {
      clearInterval(intervalId);
    }
  }
}

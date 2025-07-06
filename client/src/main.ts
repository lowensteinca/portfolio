import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideAnimations()
  ]
});

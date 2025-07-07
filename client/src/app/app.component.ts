import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/';
import { AboutComponent } from './components/about';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact';
import { ProjectsComponent } from './components/projects';
import { ExperienceComponent } from './components/experience';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    FooterComponent,
    ScrollProgressComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}

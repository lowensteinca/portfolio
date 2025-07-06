
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technology } from '../../data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills = signal([
    'Angular', 'React', 'Node.js', 'NestJS', 'TypeScript', 'JavaScript',
    'CouchDB', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Azure',
    'TailwindCSS', 'GraphQL', 'Microservices', 'CI/CD'
  ]);

  technologies = signal<Technology[]>([
    { name: 'Angular/React', level: 95 },
    { name: 'Node.js/NestJS', level: 92 },
    { name: 'TypeScript', level: 90 },
    { name: 'CouchDB/NoSQL', level: 88 },
    { name: 'Cloud Platforms', level: 85 },
    { name: 'TailwindCSS', level: 93 }
  ]);
}

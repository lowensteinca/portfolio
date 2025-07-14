import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Project } from '@app/data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with microservices architecture, real-time inventory management, and advanced analytics.',
      technologies: ['Angular', 'NestJS', 'CouchDB', 'Docker'],
      color: 'blue',
      status: 'completed',
      createdAt: undefined,
      updatedAt: undefined
    },
    {
      name: 'Real-time Chat Application',
      description: 'Scalable chat platform with WebSocket integration, message encryption, and file sharing capabilities.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      color: 'green',
      status: 'completed',
      createdAt: undefined,
      updatedAt: undefined
    },
    {
      name: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence with real-time data visualization and predictive analytics.',
      technologies: ['Vue.js', 'Express', 'CouchDB', 'D3.js'],
      color: 'purple',
      status: 'completed',
      createdAt: undefined,
      updatedAt: undefined
    },
    {
      name: 'DevOps Pipeline Tool',
      description: 'Automated CI/CD pipeline management tool with integrated testing, deployment, and monitoring.',
      technologies: ['Angular', 'NestJS', 'Docker', 'AWS'],
      color: 'red',
      status: 'completed',
      createdAt: undefined,
      updatedAt: undefined
    },
    {
      name: 'IoT Monitoring System',
      description: 'Real-time monitoring system for IoT devices with predictive maintenance and alert management.',
      technologies: ['React', 'Node.js', 'InfluxDB', 'MQTT'],
      color: 'yellow',
      status: 'completed',
      createdAt: undefined,
      updatedAt: undefined
    },
    {
      name: 'Blockchain Wallet',
      description: 'Secure cryptocurrency wallet with multi-signature support and advanced security features.',
      technologies: ['Angular', 'NestJS', 'Web3.js', 'PostgreSQL'],
      color: 'indigo',
      status: 'completed',
      createdAt: undefined,
      updatedAt: undefined
    }
  ]);

  trackByProject(index: number, project: Project): string {
    return project.name;
  }
}

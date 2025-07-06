import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Submit contact form to NestJS backend
  submitContact(contactData: Omit<ContactSubmission, 'timestamp'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, {
      ...contactData,
      timestamp: new Date()
    });
  }

  // Get portfolio projects from CouchDB via NestJS
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }

  // Get analytics data
  getAnalytics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/analytics`);
  }
}

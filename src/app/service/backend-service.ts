import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private backendUrl = 'http://localhost:8084/api/v1/demo'; 

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {}

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.keycloakService.getToken(),
    });
    return headers;
  }

  getMicroserviceUser(): Observable<string> {
    const url = `${this.backendUrl}/microserviceUser`;
    return this.http.get(url, { headers: this.getHeaders(), responseType: 'text' });
  }

  getMicroserviceAdmin(): Observable<string> {
    const url = `${this.backendUrl}/microserviceAdmin`;
    return this.http.get(url, { headers: this.getHeaders(), responseType: 'text' });
  }

  getMicroserviceAdminUser(): Observable<string> {
    const url = `${this.backendUrl}/microserviceAdminUser`;
    return this.http.get(url, { headers: this.getHeaders(), responseType: 'text' });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseUrl = 'http://localhost:8084/restapi/v1/demo';

  constructor(private http: HttpClient) {}

  getTestData(): Observable<string> {
    return this.http.get(this.baseUrl, { responseType: 'text' });
  }
}
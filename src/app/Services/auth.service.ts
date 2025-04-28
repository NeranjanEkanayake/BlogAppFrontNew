import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiAuthUrl = 'https://localhost:7064/api/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiAuthUrl}/login`, { username, password });
  }

  storeToken(token: string) {
    localStorage.setItem('jwt_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  clearToken(){
    localStorage.removeItem('jwt_token');
  }
}

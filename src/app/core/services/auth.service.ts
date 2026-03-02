import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private api = 'http://localhost:8080/auth';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  login(email: string, password: string) {
    return this.http.post<string>(`${this.api}/login`, { email, password })
      .pipe(
        tap(token => this.tokenService.setToken(token))
      );
  }

  register(email: string, password: string) {
    return this.http.post(`${this.api}/register`, { email, password });
  }

  logout(): void {
    this.tokenService.clear();
  }

  isAuthenticated(): boolean {
    return this.tokenService.isLogged();
  }
}
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {

  // 🔐 Clave donde se guarda el JWT
  private readonly TOKEN_KEY = 'auth_token';

  /* =========================
     💾 Gestión del token
     ========================= */

  // Guarda el token en localStorage
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Obtiene el token actual
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Elimina el token (logout interno)
  clear(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Indica si el usuario está autenticado
  isLogged(): boolean {
    return !!this.getToken();
  }

  // Cierra sesión oficialmente
  logout(): void {
    this.clear();
  }

  /* =========================
     🧠 Decodificación del JWT
     ========================= */

  // Extrae el rol del token
  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role ?? null;
    } catch (error) {
      return null; // Si el token está corrupto
    }
  }
}
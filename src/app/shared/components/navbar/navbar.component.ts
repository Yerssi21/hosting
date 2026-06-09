import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TokenService } from '../../../core/services/token.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  /* =========================
     🎨 Estado visual del navbar
     ========================= */

  // Cambia estilo cuando se hace scroll
  isScrolled = false;

  // Controla apertura del menú móvil
  isMenuOpen = false;

  /* =========================
     🔐 Estado de autenticación
     ========================= */

  // Signal reactiva para saber si hay sesión activa
  isLogged = signal(false);

  // Signal para saber el rol actual del usuario (USER | ADMIN)
  role = signal<string | null>(null);

  /* =========================
     🔧 Inyecciones
     ========================= */

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private tokenService = inject(TokenService);

  constructor() {

    // 🔁 Cierra el menú automáticamente cada vez que cambia la ruta
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.closeMenu();
        document.documentElement.classList.remove('no-scroll');
      });

    // 🔄 Inicializa el estado de autenticación
    this.updateAuthState();
  }

  /* =========================
     📜 Eventos visuales
     ========================= */

  // Detecta scroll para cambiar estilo del navbar
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  // Abre / cierra menú móvil
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.documentElement.classList.toggle('no-scroll', this.isMenuOpen);
  }

  // Cierra menú manualmente
  closeMenu() {
    this.isMenuOpen = false;
    document.documentElement.classList.remove('no-scroll');
  }

  /* =========================
     🔐 Lógica de autenticación
     ========================= */

  // Actualiza signals según el token actual
  private updateAuthState() {
    this.isLogged.set(this.tokenService.isLogged());
    this.role.set(this.tokenService.getUserRole());
  }

  // Cierra sesión
  logout() {
    this.tokenService.logout();
    this.updateAuthState();
    this.router.navigate(['/home']);
  }
}
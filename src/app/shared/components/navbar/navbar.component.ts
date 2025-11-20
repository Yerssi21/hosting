import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  DestroyRef,
  inject,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  constructor() {
    // Cerrar menú en cada navegación
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.closeMenu();
        document.documentElement.classList.remove('no-scroll');
      });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.documentElement.classList.toggle('no-scroll', this.isMenuOpen);
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.documentElement.classList.remove('no-scroll');
  }
}

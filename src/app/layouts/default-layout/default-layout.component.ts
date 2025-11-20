import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { HomeOverviewComponent } from '../../features/home-overview/home-overview.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ToastComponent,
    HomeOverviewComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    CommonModule
  ],
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
   private router = inject(Router);
  isHome = signal(false);

  constructor() {
    const update = () => this.isHome.set(this.router.url.startsWith('/home'));
    update();
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(update);
  }
}

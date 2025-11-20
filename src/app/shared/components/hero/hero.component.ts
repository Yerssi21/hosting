import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

type HeroKey = 'home' | 'pedido' | 'venta' | 'soporte' | 'cliente' | 'none';
type HeroAnim = '' | 'zoom' | 'float' | 'fadezoom';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  /* =========================
     SLIDER "HAZ TU PEDIDO"
     ========================= */

  readonly pedidoSlides: string[] = [
    '/images/pedido-1.jpg',
    '/images/pedido-2.jpg',
    '/images/pedido-3.jpg',
  ];

  pedidoActive = 0;
  private pedidoTimer: number | null = null;

  /* =========================
     ESTADO HERO
     ========================= */

  hero = signal<HeroKey>('home');
  anim = signal<HeroAnim>('');

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  /* =========================
     TEXTOS DEL HERO (copy mejorada)
     ========================= */

  heroText: Record<HeroKey, { title: string; subtitle: string }> = {
    home: {
      title: 'Variedad, calidad y estilo en un solo lugar',
      subtitle: 'Imprime, vende y recibe tus productos sin complicarte.',
    },
    pedido: {
      title: 'Crea tu pedido como tú lo imaginas',
      subtitle: 'Elige cantidades, diseños y acabados en pocos clics.',
    },
    venta: {
      title: 'Empieza a vender en línea hoy mismo',
      subtitle: 'Convierte tus ideas en productos listos para enviar.',
    },
    soporte: {
      title: 'Acompañamiento real para tu negocio',
      subtitle: 'Te ayudamos con producción, envíos y dudas del día a día.',
    },
    cliente: {
      title: 'Tu área cliente, siempre disponible',
      subtitle: 'Consulta pedidos, facturas y estados en tiempo real.',
    },
    none: {
      title: '',
      subtitle: '',
    },
  };

  constructor() {
    const setHeroFromRoute = () => {
      // Bajar hasta la ruta activa más profunda
      let r: ActivatedRoute | null = this.router.routerState.root;
      while (r?.firstChild) r = r.firstChild;

      const data = r?.snapshot?.data ?? {};
      const key = (data['hero'] as HeroKey) ?? 'home';
      const anim = (data['heroAnim'] as HeroAnim) ?? '';

      this.hero.set(key);
      this.anim.set(anim);

      this.handleHeroChange(key);
    };

    // Primera carga
    setHeroFromRoute();

    // Cada vez que cambia la ruta
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => setHeroFromRoute());

    // Limpiar timers al destruir
    this.destroyRef.onDestroy(() => this.stopPedidoHero());
  }

  /* =========================
     HERO "PEDIDO" - LÓGICA
     ========================= */

  private handleHeroChange(key: HeroKey): void {
    if (key === 'pedido') {
      this.initPedidoHero();
    } else {
      this.stopPedidoHero();
    }
  }

  private initPedidoHero(): void {
    // Imagen inicial
    this.setPedidoImage(this.pedidoActive || 0);

    // Por si quedaba un intervalo previo
    if (this.pedidoTimer != null) {
      clearInterval(this.pedidoTimer);
    }

    // Autoplay
    this.pedidoTimer = window.setInterval(() => {
      if (this.hero() !== 'pedido') return;

      const next =
        (this.pedidoActive + 1) % (this.pedidoSlides.length || 1);
      this.setPedidoImage(next);
    }, 3500);
  }

  private stopPedidoHero(): void {
    if (this.pedidoTimer != null) {
      clearInterval(this.pedidoTimer);
      this.pedidoTimer = null;
    }
  }

  private setPedidoImage(index: number): void {
    if (!this.pedidoSlides.length) return;

    if (index < 0 || index >= this.pedidoSlides.length) {
      index = 0;
    }

    this.pedidoActive = index;
    const url = this.pedidoSlides[index];

    // Esta var la usa tu SCSS en .hero.hero--pedido::before
    document.documentElement.style.setProperty(
      '--pedido-current',
      `url('${url}')`
    );
  }

  onPedidoDotHover(index: number): void {
    if (this.hero() !== 'pedido') return;

    this.setPedidoImage(index);

    // Reinicia autoplay al cambiar manualmente
    if (this.pedidoTimer != null) {
      clearInterval(this.pedidoTimer);
    }

    this.pedidoTimer = window.setInterval(() => {
      if (this.hero() !== 'pedido') return;

      const next =
        (this.pedidoActive + 1) % (this.pedidoSlides.length || 1);
      this.setPedidoImage(next);
    }, 3500);
  }
}

import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  signal,
  inject,
  DestroyRef,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

type HeroKey = 'home' | 'pedido' | 'venta' | 'soporte' | 'cliente' | 'none';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss'],
})
export class NavbarComponentComponent {
  /* =========================
     HERO "HAZ TU PEDIDO" - SLIDER
     ========================= */

  pedidoSlides = [
    '/images/pedido-1.jpg',
    '/images/pedido-2.jpg',
    '/images/pedido-3.jpg',
  ];

  pedidoActive = 0;
  private pedidoTimer: any;

  /* =========================
     INYECCIONES
     ========================= */

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  /* =========================
     ESTADO HERO / NAV
     ========================= */

  hero = signal<HeroKey>('home');
  anim = signal<'' | 'zoom' | 'float' | 'fadezoom'>('');
  isScrolled = false;
  isMenuOpen = false;

  heroText: Record<HeroKey, { title: string; subtitle: string }> = {
    home: {
      title: 'Variedad, calidad y estilo…',
      subtitle: '¡Compra y gana al instante!',
    },
    pedido: {
      title: 'Crea tu pedido personalizado',
      subtitle: 'Selecciona tus productos y hazlo único 🎨',
    },
    venta: {
      title: 'Vende en línea',
      subtitle: 'Tu catálogo listo para el mundo 🌍',
    },
    soporte: {
      title: 'Soporte empresarial',
      subtitle: 'Acompañamiento técnico real',
    },
    cliente: {
      title: 'Área del cliente',
      subtitle: 'Gestiona pedidos y perfiles',
    },
    none: { title: '', subtitle: '' },
  };

  constructor(private route: ActivatedRoute) {
    const setHeroFromRoute = () => {
      // Ir al último hijo de la ruta activa
      let r: ActivatedRoute | null = this.router.routerState.root;
      while (r?.firstChild) r = r.firstChild;

      const data = r?.snapshot?.data ?? {};
      const key = (data['hero'] as HeroKey) ?? 'home';

      this.hero.set(key);
      this.anim.set(
        (data['heroAnim'] as '' | 'zoom' | 'float' | 'fadezoom') ?? ''
      );

      // Aquí decidimos si activar o no el slider
      this.handleHeroChange(key);
    };

    setHeroFromRoute(); // primera carga

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        setHeroFromRoute();
        this.closeMenu();
        document.documentElement.classList.remove('no-scroll');
      });

    // Cuando el componente se destruya, apagamos el timer
    this.destroyRef.onDestroy(() => {
      this.stopPedidoHero();
    });
  }

  /* =========================
     SCROLL / MENÚ
     ========================= */

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

  /* =========================
     HERO "PEDIDO" - LÓGICA
     ========================= */

  /** Se llama cada vez que cambia la ruta/hero */
  private handleHeroChange(key: HeroKey) {
    if (key === 'pedido') {
      this.initPedidoHero();
    } else {
      this.stopPedidoHero();
    }
  }

  /** Inicia autoplay del carrusel solo en hero pedido */
  private initPedidoHero() {
    // Imagen inicial
    this.setPedidoImage(this.pedidoActive || 0);

    // Limpia si ya existía
    if (this.pedidoTimer) {
      clearInterval(this.pedidoTimer);
    }

    // Autoplay cada 3.5s
    this.pedidoTimer = setInterval(() => {
      if (this.hero() !== 'pedido') return; // seguridad
      const next =
        (this.pedidoActive + 1) % (this.pedidoSlides.length || 1);
      this.setPedidoImage(next);
    }, 3500);
  }

  /** Detiene el autoplay cuando salimos de "haz tu pedido" */
  private stopPedidoHero() {
    if (this.pedidoTimer) {
      clearInterval(this.pedidoTimer);
      this.pedidoTimer = null;
    }
  }

  /** Aplica la imagen al CSS var que usa hero--pedido::before */
  private setPedidoImage(index: number) {
    if (!this.pedidoSlides.length) return;

    if (index < 0 || index >= this.pedidoSlides.length) {
      index = 0;
    }

    this.pedidoActive = index;
    const url = this.pedidoSlides[index];

    // Esta variable la lee tu SCSS:
    // .hero.hero--pedido::before { background: ..., var(--pedido-current, url(...)) }
    document.documentElement.style.setProperty(
      '--pedido-current',
      `url('${url}')`
    );
  }

  /** Hover en un punto → cambia al instante y reinicia el autoplay */
  onPedidoDotHover(index: number) {
    if (this.hero() !== 'pedido') return;

    this.setPedidoImage(index);

    if (this.pedidoTimer) {
      clearInterval(this.pedidoTimer);
    }

    this.pedidoTimer = setInterval(() => {
      if (this.hero() !== 'pedido') return;
      const next =
        (this.pedidoActive + 1) % (this.pedidoSlides.length || 1);
      this.setPedidoImage(next);
    }, 3500);
  }
}

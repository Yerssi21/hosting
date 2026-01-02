import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepsSliderComponent } from '../steps-slider/steps-slider.component';

@Component({
  selector: 'app-venta-online',
  standalone: true,
  imports: [CommonModule, RouterLink, StepsSliderComponent],
  templateUrl: './venta-online.component.html',
  styleUrls: ['./venta-online.component.scss'],
})
export class VentaOnlineComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    // Sólo en navegador
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // fallback: mostrar todo
      document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            // Si no quieres que vuelva a ocultarse:
            this.observer?.unobserve(target);
          }
        });
      },
      {
        threshold: 0.16, // cuando ~16% del bloque es visible
      }
    );

    document.querySelectorAll<HTMLElement>('.js-observe').forEach(el => {
      this.observer?.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

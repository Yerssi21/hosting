// src/app/shared/components/toast/toast.component.ts
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, signal, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastService, Toast } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent {
  private toastService = inject(ToastService);
  private destroyRef = inject(DestroyRef);

  toast = signal<Toast | null>(null);
  isHiding = signal(false);

  constructor() {
    this.toastService.toast$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((t) => {
        this.toast.set(t);

        if (t) {
          // reinicia animación
          this.isHiding.set(false);

          // inicia fade-out un poco antes de ocultar
          const total = t.duration ?? 3000;
          const fade = Math.min(300, total); // 300ms de transición
          window.setTimeout(() => this.isHiding.set(true), total - fade);

          // limpia el DOM al finalizar animación
          window.setTimeout(() => this.toast.set(null), total);
        }
      });
  }
}

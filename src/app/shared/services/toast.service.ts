// src/app/shared/services/toast.service.ts
import { Injectable } from '@angular/core';
import { ReplaySubject, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export type ToastType = 'success' | 'error' | 'info' | 'warning';
export interface Toast { message: string; type: ToastType; duration?: number }

@Injectable({ providedIn: 'root' })
export class ToastService {
  // Reenvía SIEMPRE el último valor al nuevo suscriptor
  readonly toast$ = new ReplaySubject<Toast | null>(1);

  show(toast: Toast) {
    this.toast$.next(toast);
  }

  // dispara y se limpia solo
  showAuto(toast: Toast) {
    this.show(toast);
    const d = toast.duration ?? 3000;
    // Emite null después de 'd' ms
    timer(d).subscribe(() => this.clear());
  }

  clear() {
    this.toast$.next(null);
  }
}

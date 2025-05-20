import { Component, ViewEncapsulation, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../services/toast.service';
import { Toast } from '../../../models/toast.model';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent {
  toast = signal<Toast | null>(null);
  isHiding = signal(false);

  constructor(private toastService: ToastService) {
    this.toastService.toast$.subscribe((newToast) => {
      this.toast.set(newToast);
      console.log('🟢 Mostrando toast:', newToast);

      if (newToast) {
        this.isHiding.set(false);

        setTimeout(() => {
          this.isHiding.set(true);
        }, newToast.duration ?? 3000);
      }
    });
  }
}

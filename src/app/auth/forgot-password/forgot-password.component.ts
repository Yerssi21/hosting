import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'], // usa el mismo archivo donde pegaste los estilos
})
export class ForgotPasswordComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toast: ToastService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.form.get('email')!;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const emailValue = this.email.value;

    // Aquí luego conectas tu API real de recuperación
    console.log('📩 Enviar enlace de recuperación a:', emailValue);

    this.toast.show({
      message: 'Si el correo existe en nuestra plataforma, te enviaremos un enlace para restablecer tu contraseña.',
      type: 'success',
      duration: 4000,
    });

    // Pequeño delay opcional antes de volver al login
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 800);
  }
}

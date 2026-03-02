import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastService } from '../../shared/services/toast.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // ✅ FormGroup tipado con valores
  loginForm: FormGroup = inject(FormBuilder).group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // ✅ Inyección con `inject()` (Angular moderno)
  private router = inject(Router);
  private toast = inject(ToastService);
  private auth = inject(AuthService);

  // ==============================
  // 🧠 Lógica principal
  // ==============================
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.toast.show({
        message: 'Por favor, completa correctamente los campos.',
        type: 'warning',
        duration: 2500,
      });
      return;
    }

    const { email, password } = this.loginForm.value;

    this.auth.login(email, password).subscribe({
      next: (response) => {
        this.toast.show({
          message: `¡Bienvenido ${response.email}!`,
          type: 'success',
          duration: 2500,
        });

        setTimeout(() => {
          if (response.role === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home']);
          }
        }, 800);
      },

      error: () => {
        this.toast.show({
          message: 'Credenciales inválidas',
          type: 'error',
          duration: 3000,
        });
      },
    });
  }

  // ==============================
  // 🧩 Getters para template
  // ==============================
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

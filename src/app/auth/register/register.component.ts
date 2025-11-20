import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toast: ToastService
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    });
  }

  get fullName() { return this.registerForm.get('fullName')!; }
  get email() { return this.registerForm.get('email')!; }
  get password() { return this.registerForm.get('password')!; }
  get confirmPassword() { return this.registerForm.get('confirmPassword')!; }
  get terms() { return this.registerForm.get('terms')!; }

  get passwordMismatch(): boolean {
    const { password, confirmPassword } = this.registerForm.value;
    return !!password && !!confirmPassword && password !== confirmPassword;
  }

  onSubmit() {
    if (this.registerForm.invalid || this.passwordMismatch) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.toast.show({
      message: 'Cuenta creada con éxito. ¡Bienvenido a Laurrvic Shop!',
      type: 'success',
      duration: 3000,
    });

    this.router.navigate(['/area-cliente']);
  }
}

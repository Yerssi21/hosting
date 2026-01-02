import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      empresa: [''],
      tipoConsulta: ['general', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      aceptaPolitica: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // Aquí luego conectarás con tu backend en Java o un endpoint REST
    console.log('Datos de contacto:', this.contactForm.value);

    // Por ahora: feedback simple y reset
    alert('Gracias por escribirnos. Te contactaremos en breve 💙');
    this.contactForm.reset({
      tipoConsulta: 'general',
      aceptaPolitica: false,
    });
    this.submitted = false;
  }

  hasError(controlName: string, error: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.touched && control.hasError(error);
  }
}

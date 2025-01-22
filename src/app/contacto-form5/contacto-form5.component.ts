import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contacto-form5',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contacto-form5.component.html',
  styleUrl: './contacto-form5.component.scss',
})
export class ContactoForm5Component {
  formularioContacto: FormGroup;
  mostrarPassword: boolean = false;
  mensajeEnviado = false;

  constructor(private formBuilder: FormBuilder) {
    this.formularioContacto = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
        rememberMe: [false],
      },
      { validators: this.matchPasswords }
    );
  }

  matchPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  togglePasswordVisibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  onSubmit() {
    if (this.formularioContacto.valid) {
      this.mensajeEnviado = true;
      this.formularioContacto.reset();
      setTimeout(() => {
        this.mensajeEnviado = false;
        this.formularioContacto.reset();
      }, 3000);
    } else {
      console.log('Formulario no válido');

      this.formularioContacto.markAllAsTouched();
      this.formularioContacto.updateValueAndValidity();
    }
  }
}

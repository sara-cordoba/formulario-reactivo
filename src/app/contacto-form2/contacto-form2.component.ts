import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-contacto-form2',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contacto-form2.component.html',
  styleUrl: './contacto-form2.component.scss',
})
export class ContactoForm2Component {
  formularioContacto2: FormGroup;
  mensajeEnviado = false;

  constructor(private form: FormBuilder) {
    this.formularioContacto2 = this.form.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ][a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/), // Permite letras con acentos y ñ
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ][a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/),
        ],
      ],
      tel: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'), // Acepta solo números
          Validators.minLength(9), // Longitud mínima (por ejemplo, 10 dígitos)
          Validators.maxLength(15), // Longitud máxima (por ejemplo, 15 dígitos)
        ],
      ],
    });
  }

  onSubmit() {
    if (this.formularioContacto2.valid) {
      console.log(
        'Formulario enviado correctamente:',
        this.formularioContacto2.value
      );

      this.mensajeEnviado = true;

      setTimeout(() => {
        this.mensajeEnviado = false;
        this.formularioContacto2.reset();
      }, 3000);
    } else {
      console.log('Formulario no válido');

      this.formularioContacto2.markAllAsTouched();
      this.formularioContacto2.updateValueAndValidity();
    }
  }
}

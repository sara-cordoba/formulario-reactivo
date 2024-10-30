import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contacto-form3',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contacto-form3.component.html',
  styleUrl: './contacto-form3.component.scss',
})
export class ContactoForm3Component {
  formularioContacto3: FormGroup;
  mensajeEnviado = false;

  constructor(private form: FormBuilder) {
    this.formularioContacto3 = this.form.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ][a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ][a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/),
        ],
      ],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      tel: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(9),
          Validators.maxLength(12),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.formularioContacto3.valid) {
      console.log('Formulario enviado!:', this.formularioContacto3.value);

      this.mensajeEnviado = true;

      setTimeout(() => {
        this.mensajeEnviado = false;
        this.formularioContacto3.reset();
      }, 3000);
    } else {
      console.log('Formulario no válido');
    }
  }
}

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contacto-form4',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contacto-form4.component.html',
  styleUrl: './contacto-form4.component.scss',
})
export class ContactoForm4Component {
  formularioContacto: FormGroup;
  mensajeEnviado = false;

  constructor(private formBuilder: FormBuilder) {
    this.formularioContacto = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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

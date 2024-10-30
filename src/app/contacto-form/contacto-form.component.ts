// Importamos los módulos necesarios para crear el formulario reactivo y manejar su estado
import { NgIf } from '@angular/common'; // NgIf es una directiva para mostrar/ocultar elementos condicionalmente en el HTML
import { Component } from '@angular/core';
import {
  ReactiveFormsModule, // Módulo para trabajar con formularios reactivos en Angular
  FormBuilder, // Servicio que facilita la creación de formularios reactivos
  FormGroup, // Representa un grupo de controles de formulario
  Validators, // Validadores para aplicar reglas de validación en los campos
} from '@angular/forms';

@Component({
  selector: 'app-contacto-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf], // Módulos que necesitamos importar para el funcionamiento
  templateUrl: './contacto-form.component.html', // Archivo HTML del componente
  styleUrl: './contacto-form.component.scss', // Archivo de estilos del componente
})
export class ContactoFormComponent {
  // Definimos una propiedad "formularioContacto" que representa el grupo de controles del formulario
  formularioContacto: FormGroup;

  // Variable de estado para controlar si el mensaje de confirmación debe mostrarse
  mensajeEnviado = false;

  constructor(private formBuilder: FormBuilder) {
    // Inicializamos "formularioContacto" usando FormBuilder para crear un grupo de controles
    this.formularioContacto = this.formBuilder.group({
      // Cada control tiene un nombre (nombre, correo, mensaje), un valor inicial y validadores
      nombre: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]], // No permite solo espacios en blanco]], // Campo requerido (no puede estar vacío)
      correo: ['', [Validators.required, Validators.email]], // Campo requerido con formato de email
      mensaje: ['', [Validators.required, Validators.minLength(10)]], // Campo requerido con mínimo de 10 caracteres
    });
  }

  // Método que se llama al enviar el formulario
  onSubmit() {
    // Comprobamos si el formulario es válido (todos los campos cumplen con las validaciones)
    if (this.formularioContacto.valid) {
      // Si es válido, mostramos los valores en la consola
      console.log('Formulario enviado:', this.formularioContacto.value);

      // Activamos "mensajeEnviado" en true para que el mensaje de confirmación aparezca en pantalla
      this.mensajeEnviado = true;

      // Reseteamos el formulario después de enviarlo para limpiarlo
      this.formularioContacto.reset();

      // Usamos setTimeout para ocultar el mensaje después de 3 segundos (3000 milisegundos)
      setTimeout(() => {
        this.mensajeEnviado = false; // Ocultamos el mensaje de confirmación
        this.formularioContacto.reset();
      }, 3000);
    } else {
      // Si el formulario no es válido, mostramos un mensaje en consola
      console.log('Formulario no válido');

      // Llamamos a markAllAsTouched para marcar todos los campos como "tocados" y mostrar los mensajes de error
      this.formularioContacto.markAllAsTouched();
      this.formularioContacto.updateValueAndValidity(); // Asegura que los estados de los campos se actualicen
    }
  }
}

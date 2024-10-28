// Importamos los módulos esenciales para el componente raíz
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // RouterOutlet permite el uso de rutas en la aplicación
import { ContactoFormComponent } from './contacto-form/contacto-form.component'; // Importamos el componente de formulario de contacto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoFormComponent], // Importamos RouterOutlet y el componente ContactoFormComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'formulario-reactivo';

  // Variable para el año actual
  currentYear = new Date().getFullYear();
}

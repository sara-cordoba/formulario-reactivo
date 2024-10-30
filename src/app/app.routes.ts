import { Routes } from '@angular/router';
import { ContactoForm2Component } from './contacto-form2/contacto-form2.component';
import { ContactoFormComponent } from './contacto-form/contacto-form.component';

export const routes: Routes = [
  { path: 'form1', component: ContactoFormComponent },
  { path: 'form2', component: ContactoForm2Component },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

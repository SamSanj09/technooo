import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-ventas',
  standalone: true,
  imports: [],
  templateUrl: './vista-ventas.component.html',
  styleUrl: './vista-ventas.component.css'
})
export class VistaVentasComponent {
  constructor() { }

  submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado');
  }
}

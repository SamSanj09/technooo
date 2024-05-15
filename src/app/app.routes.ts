import { Routes } from '@angular/router';
import { VistaVentasComponent } from './vista-ventas/vista-ventas.component';
import { VistaInventarioComponent } from './vista-inventario/vista-inventario.component';
import { VistaInicial1Component } from './vista-inicial1/vista-inicial1.component';


export const routes: Routes = [
  { path: 'vista-inicial1', component: VistaInicial1Component }, // Standalone component
  { path: 'vista-ventas', component: VistaVentasComponent }, // Standalone component
  { path: 'vista-inventario', component: VistaInventarioComponent }, // Standalone component
];

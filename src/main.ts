import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaInicial1Component } from './app/vista-inicial1/vista-inicial1.component';

const routes: Routes = [
  { path: '', redirectTo: 'vista-inicial1', pathMatch: 'full' }, // Redirección desde la ruta raíz
  { path: 'vista-inicial1', component: VistaInicial1Component },
  // Otros componentes y rutas
];


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

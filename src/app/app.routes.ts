import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page';
import { AboutPage } from './pages/about/about.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioPage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./pages/bienvenida/bienvenida.page').then(m => m.BienvenidaPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage)
  }
  
];

export const appRouter = provideRouter(routes);
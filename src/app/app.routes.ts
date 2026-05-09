import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Ottica Visus — Ottico a Genova, esame vista gratuito'
  },
  {
    path: 'servizi',
    loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
    title: 'Servizi — Ottica Visus Genova'
  },
  {
    path: 'brand',
    loadComponent: () => import('./pages/brand/brand.component').then((m) => m.BrandComponent),
    title: 'Brand e Montature — Ottica Visus Genova'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then((m) => m.ChiSiamoComponent),
    title: 'Chi siamo — Ottica Visus Genova'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then((m) => m.ContattiComponent),
    title: 'Prenota Esame Vista — Ottica Visus Genova'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

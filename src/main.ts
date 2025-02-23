import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'login', loadComponent: () => import('./app/pages/login/login.component').then(c => c.LoginComponent) },
  { path: 'registro', loadComponent: () => import('./app/pages/resgistro/resgistro.component').then(c => c.ResgistroComponent) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

bootstrapApplication(AppComponent,{
  providers: [
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));

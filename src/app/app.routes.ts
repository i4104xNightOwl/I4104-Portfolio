import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/app.component';
import { InfoComponent } from './features/info/info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: InfoComponent },
];

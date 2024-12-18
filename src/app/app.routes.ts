import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'categories', component: CategoriesComponent }
];
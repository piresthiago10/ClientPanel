import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './compoments/dashboard/dashboard.component';
import { LoginComponent } from './compoments/login/login.component';
import { RegisterComponent } from './compoments/register/register.component';
import { AddClientComponent } from './compoments/add-client/add-client.component';
import { EditClientComponent } from './compoments/edit-client/edit-client.component';
import { ClientDetailsComponent } from './compoments/client-details/client-details.component';
import { SettingsComponent } from './compoments/settings/settings.component';
import { NotFoundComponent } from './compoments/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/edit/:id', component: EditClientComponent},
  {path: 'client/:id', component: ClientDetailsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

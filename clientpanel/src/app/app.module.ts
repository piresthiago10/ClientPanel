import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compoments/navbar/navbar.component';
import { DashboardComponent } from './compoments/dashboard/dashboard.component';
import { SidebarComponent } from './compoments/sidebar/sidebar.component';
import { AddClientComponent } from './compoments/add-client/add-client.component';
import { EditClientComponent } from './compoments/edit-client/edit-client.component';
import { ClientDetailsComponent } from './compoments/client-details/client-details.component';
import { LoginComponent } from './compoments/login/login.component';
import { RegisterComponent } from './compoments/register/register.component';
import { SettingsComponent } from './compoments/settings/settings.component';
import { NotFoundComponent } from './compoments/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

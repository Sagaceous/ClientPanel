import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ClientsComponent,
    EditClientComponent,
    ClientDetailsComponent,
    AddClientComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
    AngularFirestore,
    AngularFireAuth,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetsPageComponent } from './assets-page/assets-page.component';
import { FormsModule } from '@angular/forms';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authInterceptorProviders } from './_interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { AlertsPageComponent } from './alerts-page/alerts-page.component';
import { AlertsListComponent } from './alerts-list/alerts-list.component';
import { AddAlertComponent } from './add-alert/add-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAssetComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AssetsListComponent,
    AssetsPageComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ProfileComponent,
    AlertsPageComponent,
    AlertsListComponent,
    AddAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

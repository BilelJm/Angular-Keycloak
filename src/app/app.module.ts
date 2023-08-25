import { APP_INITIALIZER, NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


export function kcFactory(kcService: KeycloakService){
  return () => kcService.init({
    config: {
      url: 'http://localhost:8080',
      realm: 'test-realm',
      clientId: 'test-client'
    },
    initOptions: {
      onLoad: 'check-sso',
      checkLoginIframe: true
    },
   // enableBearerInterceptor: true
  }
  );
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
  
  ],
  providers: [ 
    { 
      provide: APP_INITIALIZER, 
      useFactory: kcFactory,
      deps: [KeycloakService], 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

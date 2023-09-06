import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../service/security-service';
import { KeycloakService } from 'keycloak-angular'; // Import KeycloakService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public securityService: SecurityService, private keycloakService: KeycloakService) { }

  public async ngOnInit() {
    
  }

  onLogout() {
    this.keycloakService.logout(window.location.origin); 
  }
 
  async login(){
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });

    // Get token from keycloakService
    //const token = this.keycloakService.getKeycloakInstance().token;
    
  }
}

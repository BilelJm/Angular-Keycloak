import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BackendService } from '../service/backend-service';
import { SecurityService } from '../service/security-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminData: string = '';

  constructor(private backendService: BackendService, private kcService: KeycloakService, private securityService : SecurityService) { }

  ngOnInit(): void {
    this.securityService.kcService.getToken().then(token => {
      console.log("Token:", token);
      console.log("User Roles:", this.securityService.kcService.getUserRoles());

      this.kcService.loadUserProfile().then(profile => {
        console.log("User Profile:", profile);
        console.log("Username:", this.kcService.getUsername());
        console.log("First Name:", this.securityService.profile?.firstName);
      }).catch(error => {
        console.error("Error loading user profile:", error);
      });
    }).catch(error => {
      console.error("Error getting token:", error);
    });

    /********************************************************************************************/
    this.backendService.getMicroserviceAdmin().subscribe(data => {
      this.adminData = data;
    },
      error => {
        console.log(error);
      }

    );
  }
}

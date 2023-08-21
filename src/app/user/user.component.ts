import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../service/security-service';
import { KeycloakService } from 'keycloak-angular';
import { BackendService } from '../service/backend-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData: string = '';
  constructor(public securityService: SecurityService, private backendService : BackendService , public kcService: KeycloakService) {}

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
    this.backendService.getMicroserviceUser().subscribe(data => {
      this.userData = data;
    });


    
    /*this.securityService.kcService.getToken().then(token => {
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
    });*/


  }


  
}

import {Injectable} from "@angular/core";
import {KeycloakProfile} from "keycloak-js";
import {KeycloakEventType, KeycloakService} from "keycloak-angular";

@Injectable({providedIn : "root"})
export class SecurityService {
  public profile? : KeycloakProfile;
  constructor (public kcService: KeycloakService) {
    this.init();
  }
  init() {
    this.kcService.keycloakEvents$.subscribe({
      next: (e) => {
        console.log("Keycloak event:", e.type);
        // Handle other events if needed
      }
    });
    
    // Load user profile outside the subscription
    this.loadUserProfileIfLoggedIn();
  }
  
  private async loadUserProfileIfLoggedIn() {
    if (await this.kcService.isLoggedIn()) {
      const profile = await this.kcService.loadUserProfile();
      this.profile = profile;
    }
  }
  
  public hasRoleIn(roles:string[]):boolean{
    let userRoles = this.kcService.getUserRoles();
    for(let role of roles){
      if (userRoles.includes(role)) return true;
    } return false;
  }
}
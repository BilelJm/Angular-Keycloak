import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../service/security-service';
import { TestService } from '../service/Test-servie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public securityService: SecurityService, private testservice : TestService) { }

  public async ngOnInit() {

  }

  onLogout() {
    this.securityService.kcService.logout(window.location.origin);
  }
 
  public async getToken() {
  }

  async login(){
    await this.securityService.kcService.login({
      redirectUri : window.location.origin
    })
    console.log("login");
  }

}
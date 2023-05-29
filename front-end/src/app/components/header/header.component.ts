import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

user: SocialUser | null =null  ;
loggedIn: boolean = false;

constructor(private userServices:UserService){ }

async ngOnInit() {
this.user = await this.userServices.obtenerUsuarioDeLaSesion();
this.loggedIn = this.user !=null 

}

}
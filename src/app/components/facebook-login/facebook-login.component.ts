import { Component, OnInit } from '@angular/core';

import {FacebookService, FacebookLoginResponse, FacebookInitParams, FacebookLoginStatus} from 'ng2-facebook-sdk';

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {

  constructor(private fb: FacebookService) {
    let fbParams: FacebookInitParams = {
      appId: '381362508892851',
      xfbml: true,
      version: 'v2.8'
    };
    this.fb.init(fbParams);
  }

  someFunction(): void {
    this.fb.login().then(
        (response: FacebookLoginResponse) => console.log(response),
        (error: any) => console.error(error)
    );
  }

  checkStatus(): void {
    this.fb.getLoginStatus().then(
        (response: FacebookLoginStatus) => console.log(response),
        (error: any) => console.error(error));
  }

  ngOnInit() {
  }

}

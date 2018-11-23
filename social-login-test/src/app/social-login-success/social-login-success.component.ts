import { CommonService } from './../service/common.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-social-login-success',
  templateUrl: './social-login-success.component.html',
  styleUrls: ['./social-login-success.component.css']
})
export class SocialLoginSuccessComponent implements OnInit {

  constructor(private loginService: LoginService, private commonService: CommonService) { }
  tokenValue: string;
  userName: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;

  ngOnInit() {

    // fetching token value
    console.log('fetching user data');
    this.tokenValue = this.getParamValueQueryString('token');
    // this.loginService.getSuccessLoginUserInfo(this.tokenValue).subscribe(
    //   response => {
    //     // console.log(response.body.user);
    //     const userData = response.body.user;
    //     this.name = userData.tag.name;
    //     this.userName = userData.username;
    //   },
    //   err => {
    //     console.error(err);
    //   }
    // );

    this.loginService.getUserInfo2(this.tokenValue).subscribe(
      response => {
        console.log(response);

        const userInfo = response.body.user;
        this.userName = userInfo.username;
        this.name = userInfo.name;
        this.picture = userInfo.picture;
        this.firstName = userInfo.firstName;
        this.lastName = userInfo.lastName;
        this.email = userInfo.email;

      },
      err => {
        console.error(err);
      }
    );

  }

  getParamValueQueryString(paramName) {
    const url = window.location.href;
    let paramValue;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      paramValue = httpParams.get(paramName);
    }
    return paramValue;
  }

  anotherEndpointHit() {
    this.loginService.anotherEndpointHit().subscribe(
      response => {
        console.log(response);

      },
      err => {
        console.error(err);
      }
    );
  }

}

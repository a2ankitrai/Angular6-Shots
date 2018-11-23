import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {

  }

  googleSignIn(useLemon) {
    console.log('initiating google sign in');

    this.loginService.googleLogin(useLemon).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.error(err);
      }
    );
  }

  githubSignIn() {
    this.loginService.socialSignIn('github');
  }

  googleSignInLemon() {
    this.googleSignIn(true);
  }

  googleSignInNs() {
    this.googleSignIn(false);
  }

  facebookLogin() {
    this.loginService.facebookLogin();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  useLemon = false;

  endpoint = 'http://localhost:8080/';

  constructor(private http: HttpClient) {

  }

  socialSignIn(provider) {
    window.location.href = this.endpoint + 'oauth2/authorization/' + provider;
  }

  googleLogin(useLemon): Observable<any> {

    this.useLemon = useLemon;

    if (this.useLemon) {
      this.endpoint = 'http://localhost:8090/';
    } else {
      this.endpoint = 'http://localhost:8080/';
    }

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    this.onNavigate();
    return this.http.post(this.endpoint + 'oauth2/authorization/google', null, { headers: headers, 'observe': 'response' });

  }

  facebookLogin() {
    window.location.replace(this.endpoint + 'oauth2/authorization/facebook');

  }

  onNavigate() {

    /**
     * use below open method to open a oauth screen in a new window.
     * issue : does not closes the window and after redirect success page opens in the popup window only
     * **/
    // window.open(this.endpoint + 'oauth2/authorization/google', '_blank',
    //   'height=700,width=700,status=yes,toolbar=no,menubar=no,location=no');

    // similar behavior as clicking on a link
    window.location.href = this.endpoint + 'oauth2/authorization/google';

    /**
     * similar behavior as an HTTP redirect. this clears the back history.
     * if user clicks back button original login page will not come
     *  */


    // window.location.replace(this.endpoint + 'oauth2/authorization/google');
  }

  getSuccessLoginUserInfo(token): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get(this.endpoint + 'context/', { headers: headers, 'observe': 'response' });

    // const dataObservable = this.http.post(this.endpoint + 'api/core/users/' + token, { headers: headers, 'observe': 'response' });
    // return dataObservable;

    // localStorage.setItem('authHeader', 'Bearer ' + token);
    // const dataObservable = this.http.post(this.endpoint + 'api/core/users/' + token, '');
    // return dataObservable;
  }


  getUserInfo2(token): Observable<any> {

    this.endpoint = 'http://localhost:8080/';
    let api = 'api/core/context';
    api = 'context';

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get(this.endpoint + api, { headers: headers, 'observe': 'response' });


  }

  anotherEndpointHit(): Observable<any> {

    let headers = new HttpHeaders();
    const api = 'anotherEndpoint';
    headers = headers.set('Content-Type', 'application/json');

    return this.http.get(this.endpoint + api, { responseType: 'text', headers: headers, 'observe': 'response' });
  }

  /**
   * use js cookie for setting up cookie releated operation.
   * https://github.com/js-cookie/js-cookie
   * * */

}

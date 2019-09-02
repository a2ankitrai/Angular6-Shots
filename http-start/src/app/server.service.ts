
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    // return this.http.post('https://angular-http-4b7ee.firebaseio.com/data.json', servers, { headers: headers });
    return this.http.put('https://angular-http-4b7ee.firebaseio.com/data.json', servers, { headers: headers });
  }

  getServers() {
    // return this.http.get('https://angular-http-4b7ee.firebaseio.com/data.json');
    // return this.http.get('https://angular-http-4b7ee.firebaseio.com/data') // for error
    return this.http.get('https://angular-http-4b7ee.firebaseio.com/data')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'SERVER_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          //  console.log(error);

          // resolve below
          return Observable.throw(new Error('oops!'));
        }
      )
      ;
  }

  getAppName() {
    return this.http.get('https://angular-http-4b7ee.firebaseio.com/AppName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}

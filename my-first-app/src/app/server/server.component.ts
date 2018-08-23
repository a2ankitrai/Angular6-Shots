import { Component } from '@angular/core';

const offlineStyle = `.offline { color : yellow;}  `;
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online { color : white;}`, offlineStyle]
})
export class ServerComponent {

  serverId = 42;
  serverStatus: String = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

}

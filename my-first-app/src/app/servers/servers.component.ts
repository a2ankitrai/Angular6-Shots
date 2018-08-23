import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: String = 'No Server was created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];


  switchStatus: String = 'OFF';
  switchFlag: Boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }


  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created with name ' + this.serverName;
  }

  onSwitch() {
    this.switchFlag = !this.switchFlag;

    if (this.switchFlag) {
      this.switchStatus = 'ON';
    } else {
      this.switchStatus = 'OFF';
    }

  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

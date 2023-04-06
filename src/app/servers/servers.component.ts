import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `
    //<app-server></app-server>
  //<app-server></app-server>`,
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server was created';
serverName='testServer';
userName = '';
userNameStatus = 'anonymus';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
ngOnInit() {
}
onCreateServer () {
this.serverCreationStatus = 'Server was created! Name is ' +this.serverName;
}
  onUpdateServerName(event: Event) {
this.serverName = (<HTMLInputElement>event.target).value;
  }
onAddUserName() {
    this.userNameStatus = 'Name was added! Your name is ' +this.userName;
    this.userName = '';
}
}

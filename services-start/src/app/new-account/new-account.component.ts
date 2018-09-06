import { AccountsService } from './../service/accounts.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => console.log('Status Emmitted: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.loggingService.logChangeStatus(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
  }
}

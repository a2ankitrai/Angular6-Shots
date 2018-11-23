import { UsersService } from './user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  user1Activated = false;
  user2Activated = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
          this.user2Activated = false;
        } else if (id === 2) {
          this.user1Activated = false;
          this.user2Activated = true;
        }
      }
    );
  }

  ngOnDestroy() {
    this.userService.userActivated.unsubscribe();
  }


}

import { Component, OnInit } from '@angular/core';
import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

@Component({
  selector: 'app-route-animation',
  templateUrl: './route-animation.component.html',
  styleUrls: ['./route-animation.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [Animation Steps])
    ]
  ]),
})
export class RouteAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationComponent } from './animation/animation.component';
import { RouteAnimationComponent } from './route-animation/route-animation.component';

@NgModule({
  declarations: [AnimationComponent, RouteAnimationComponent],
  imports: [
    CommonModule,
    AnimationRoutingModule
  ]
})
export class AnimationModule { }

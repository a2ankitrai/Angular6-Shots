import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { RouteAnimationComponent } from './route-animation/route-animation.component';


const routes: Routes = [
  {
    path: 'animation', component: AnimationComponent, children: [
      { path: 'route-animation', component: RouteAnimationComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AnimationRoutingModule { }

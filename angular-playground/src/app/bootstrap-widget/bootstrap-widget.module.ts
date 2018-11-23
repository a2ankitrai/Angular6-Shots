import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ModalComponent } from './modal/modal.component';
import { ModalVanillaComponent } from './modal-vanilla/modal-vanilla.component';
import { BootstrapWidgetRoutingModule } from './bootstrap-widget.routing.module';

@NgModule({
  declarations: [BootstrapComponent, ModalComponent, ModalVanillaComponent],
  imports: [
    CommonModule,
    BootstrapWidgetRoutingModule
  ]
})
export class BootstrapWidgetModule { }

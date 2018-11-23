import { ModalVanillaComponent } from './modal-vanilla/modal-vanilla.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ModalComponent } from './modal/modal.component';



const routes: Routes = [
    {
        path: 'bootstrap', component: BootstrapComponent, children: [
            { path: 'modal', component: ModalComponent },
            { path: 'vanilla-modal', component: ModalVanillaComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class BootstrapWidgetRoutingModule { }


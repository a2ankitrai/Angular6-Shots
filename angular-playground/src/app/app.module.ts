import { CoreModule } from './common/core.module';
import { BootstrapWidgetModule } from './bootstrap-widget/bootstrap-widget.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    BootstrapWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

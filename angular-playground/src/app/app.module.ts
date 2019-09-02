import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './common/core.module';
import { BootstrapWidgetModule } from './bootstrap-widget/bootstrap-widget.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { TextEditorModule } from './text-editor/text-editor.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    BootstrapWidgetModule,
    TextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

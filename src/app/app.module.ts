import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from "ng-jzy-lib/alert"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

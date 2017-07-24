import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent, AppInternalComponents } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouterModule, RoutingInternalComponents } from './routing/app-router.module';

@NgModule({
  declarations: [
    AppComponent, AppInternalComponents, RoutingInternalComponents
  ],
  imports: [
    BrowserModule, HttpModule, MaterialModule, AppRouterModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Openseadragon1Component } from './openseadragon1/openseadragon1.component';
import { Openseadragon2Component } from './openseadragon2/openseadragon2.component';

@NgModule({
  declarations: [
    AppComponent,
    Openseadragon1Component,
    Openseadragon2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

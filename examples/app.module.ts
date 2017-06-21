import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SmartAdminModule } from '../src';

import { AppComponent, ALL_PAGES } from './pages';
import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    SmartAdminModule,
    AppRoutingModule,
  ],
  declarations: [...ALL_PAGES],
  providers: [/* TODO: Providers go here */],
  bootstrap: [AppComponent],
})
export class AppModule {

}

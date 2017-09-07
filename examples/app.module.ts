import './styl/common.styl';

import { ALL_PAGES, AppComponent } from './pages';

import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { COMPONENTS } from './components';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SmartAdminModule } from '../src';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SmartAdminModule,
    AppRoutingModule,
  ],
  declarations: [...COMPONENTS, ...ALL_PAGES],
  providers: [/* TODO: Providers go here */],
  bootstrap: [AppComponent],
})
export class AppModule {

}

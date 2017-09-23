import './styl/all.styl';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ALL_COMPONENTS } from './components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SERVICE_COMPONENTS } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...ALL_COMPONENTS, ...SERVICE_COMPONENTS],
  entryComponents: [...SERVICE_COMPONENTS],
  exports: [...ALL_COMPONENTS, ...SERVICE_COMPONENTS],
  providers: []
})
export class SmartAdminModule {

}

import './styl/all.styl';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ALL_COMPONENTS } from './components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...ALL_COMPONENTS],
  declarations: [...ALL_COMPONENTS],
  providers: []
})
export class SmartAdminModule {

}

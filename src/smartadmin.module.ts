import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ALL_COMPONENTS } from './components';

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

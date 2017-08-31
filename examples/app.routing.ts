import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  AccordionDemoComponent
} from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accordion', component: AccordionDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

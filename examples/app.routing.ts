import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  NotfoundComponent,
  DemoContainerComponent,
  AccordionDemoComponent
} from './pages';

const demoRoutes: Routes = [
  { path: 'accordion', component: AccordionDemoComponent },
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: DemoContainerComponent, children: demoRoutes },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    errorHandler() {
      console.log('路由匹配失败！');
    }
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

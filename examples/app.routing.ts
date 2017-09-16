import {
  AccordionDemoComponent,
  AlertDemoComponent,
  CarouselDemoComponent,
  CheckboxDemoComponent,
  CheckboxGroupDemoComponent,
  CollapseBoxDemoComponent,
  DemoContainerComponent,
  HomeComponent,
  ModalDemoComponent,
  NotfoundComponent,
  PaginationDemoComponent,
  ProgressDemoComponent,
  RadioDemoComponent,
  RadioGroupDemoComponent,
  RatingDemoComponent,
  SwitchDemoComponent,
  TableDemoComponent,
  TabsetDemoComponent,
  WidgetDemoComponent,
  WizardDemoComponent
} from './pages';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const demoRoutes: Routes = [
  { path: 'accordion', component: AccordionDemoComponent },
  { path: 'alert', component: AlertDemoComponent },
  { path: 'collapse-box', component: CollapseBoxDemoComponent },
  { path: 'carousel', component: CarouselDemoComponent },
  { path: 'modal', component: ModalDemoComponent },
  { path: 'pagination', component: PaginationDemoComponent },
  { path: 'progress', component: ProgressDemoComponent },
  { path: 'tabset', component: TabsetDemoComponent },
  { path: 'widget', component: WidgetDemoComponent },
  { path: 'wizard', component: WizardDemoComponent },

  { path: 'table', component: TableDemoComponent },

  { path: 'checkbox', component: CheckboxDemoComponent },
  { path: 'checkbox-group', component: CheckboxGroupDemoComponent },
  { path: 'radio', component: RadioDemoComponent },
  { path: 'radio-group', component: RadioGroupDemoComponent },
  { path: 'rating', component: RatingDemoComponent },
  { path: 'switch', component: SwitchDemoComponent }
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: DemoContainerComponent, children: demoRoutes },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    errorHandler() {
      console.log('路由匹配失败！');
    }
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

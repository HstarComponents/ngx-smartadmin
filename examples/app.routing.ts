import {
  AccordionDemoComponent,
  AlertDemoComponent,
  AutocompleteDemoComponent,
  CarouselDemoComponent,
  CheckboxDemoComponent,
  CheckboxGroupDemoComponent,
  CollapseBoxDemoComponent,
  DemoContainerComponent,
  HomeComponent,
  ImageZoomDemoComponent,
  InputDemoComponent,
  InputGroupDemoComponent,
  LayoutDemoComponent,
  ModalDemoComponent,
  NotfoundComponent,
  PaginationDemoComponent,
  ProgressDemoComponent,
  RadioDemoComponent,
  RadioGroupDemoComponent,
  RatingDemoComponent,
  SelectDemoComponent,
  SwitchDemoComponent,
  TableDemoComponent,
  TabsetDemoComponent,
  WidgetDemoComponent,
  WizardDemoComponent
} from './pages';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const demoRoutes: Routes = [
  // UI Elements
  { path: 'accordion', component: AccordionDemoComponent },
  { path: 'alert', component: AlertDemoComponent },
  { path: 'collapse-box', component: CollapseBoxDemoComponent },
  { path: 'carousel', component: CarouselDemoComponent },
  { path: 'modal', component: ModalDemoComponent },
  { path: 'image-zoom', component: ImageZoomDemoComponent },
  { path: 'pagination', component: PaginationDemoComponent },
  { path: 'progress', component: ProgressDemoComponent },
  { path: 'tabset', component: TabsetDemoComponent },
  { path: 'widget', component: WidgetDemoComponent },
  { path: 'wizard', component: WizardDemoComponent },

  // Layout
  { path: 'row', component: LayoutDemoComponent },
  { path: 'col', component: LayoutDemoComponent },

  // Data
  { path: 'table', component: TableDemoComponent },

  // Form Elements
  { path: 'autocomplete', component: AutocompleteDemoComponent },
  { path: 'checkbox', component: CheckboxDemoComponent },
  { path: 'checkbox-group', component: CheckboxGroupDemoComponent },
  { path: 'input', component: InputDemoComponent },
  { path: 'input-group', component: InputGroupDemoComponent },
  { path: 'radio', component: RadioDemoComponent },
  { path: 'radio-group', component: RadioGroupDemoComponent },
  { path: 'rating', component: RatingDemoComponent },
  { path: 'select', component: SelectDemoComponent },
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

import { DynamicComponent } from './dynamic-component/DynamicComponent';
import { Loading } from './loading/Loading';
import { MessageBox } from './message-box/MessageBox';
import { MessageBoxComponent } from './message-box/message-box.component';
import { NotifyBox } from './notify-box/NotifyBox';

export {
  DynamicComponent,
  Loading,
  MessageBox,
  NotifyBox
};

export const SA_SERVICES = [
  DynamicComponent,
  Loading,
  MessageBox,
  NotifyBox
];

export const SERVICE_COMPONENTS = [
  MessageBoxComponent
];


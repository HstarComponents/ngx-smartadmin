import { ComponentRef, Injectable, Optional } from '@angular/core'

import { DynamicComponent } from '../dynamic-component/DynamicComponent';
import { MessageBoxComponent } from './message-box.component';

export interface Options {
  type?: string
  iconClass?: string
  customClass?: string
  duration?: number
  showClose?: boolean
  zIndex?: number
  onClose?: Function
}

@Injectable()
export class MessageBox {

  components: any[] = []

  constructor(
    @Optional() private root: MessageBoxComponent,
    private dynamicComponent: DynamicComponent
  ) {
  }

  show(msg: string): void {
    if (this.components.length === 0 || this.components[this.components.length - 1].init) {
      this.createComponent();
    }
    // mark the component
    const current = this.components[this.components.length - 1];
    current.init = true;

    current.instance.onDestroy = () => {
      // component detach and destroy
      this.dynamicComponent.destroy(current.copy);
      // remove empty item
      const index = this.components.findIndex(com => com.id === current.id);
      this.components.splice(index, 1);
    }
    const timer = setTimeout(() => {
      current.instance.show(msg);
      clearTimeout(timer);
    });
  }

  success(msg: string, options?: Options): void {
    this.setOptions(Object.assign({}, options, { type: 'success' }));
    this.show(msg);
  }

  warning(msg: string, options?: Options): void {
    this.setOptions(Object.assign({}, options, { type: 'warning' }));
    this.show(msg);
  }

  info(msg: string, options?: Options): void {
    this.setOptions(Object.assign({}, options, { type: 'info' }));
    this.show(msg);
  }

  error(msg: string, options?: Options): void {
    this.setOptions(Object.assign({}, options, { type: 'error' }));
    this.show(msg);
  }

  setOptions(options: Options): void {
    if (this.components.length === 0 || this.components[this.components.length - 1].init) {
      this.createComponent();
    }
    let last = this.components[this.components.length - 1];
    last.instance = Object.assign(last.instance, options);
  }

  createComponent(): void {
    const comp: ComponentRef<any> = this.dynamicComponent.buildComponent(MessageBoxComponent);
    this.components.push({
      instance: comp.instance,
      id: comp.instance.id,
      copy: comp,
      init: false
    })
  }

}

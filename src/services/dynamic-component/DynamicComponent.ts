import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';

@Injectable()
export class DynamicComponent {

  constructor(
    private appRef: ApplicationRef,
    private factoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
  }

  buildComponent(container: any): ComponentRef<any> {
    let domId = this.generateDomId();
    let comp: ComponentRef<any> = this.factoryResolver.resolveComponentFactory(container).create(this.injector);
    this.appRef.attachView(comp.hostView);

    // 添加到UI上
    let hostElement: HTMLElement = document.createElement('div');
    hostElement.setAttribute('id', domId);
    comp.instance.id = domId;
    hostElement.appendChild((<any>comp.hostView).rootNodes[0])
    document.body.appendChild(hostElement);
    //返回
    return comp;
  }

  public destroy(comp: ComponentRef<any>): void {
    setTimeout(() => {
      this.destroyWait(comp);
    }, 300);
  }

  public destroyWait(comp: ComponentRef<any>): void {
    const id = comp.instance.id;
    this.appRef.detachView(comp.hostView);
    comp.destroy();
    try {
      // 尝试通过ID进行移除
      const hostElement = document.getElementById(id);
      hostElement && hostElement.parentElement.removeChild(hostElement);
    } catch (err) { }
  }

  private generateDomId(): string {
    return Math.random().toString(16).replace('.', '');
  }
}

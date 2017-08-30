import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { TabsetComponent } from './tabset.component';

@Component({
  selector: 'sa-tab-item',
  template: `<ng-content></ng-content>`
})
export class TabItemComponent implements OnInit, AfterViewInit {

  private _active: boolean = false;
  public get active() { return this._active; }
  public set active(val) {
    this._active = val;
    this.renderer.setElementClass(this.elementRef.nativeElement, 'active', val);
  }

  @Input()
  public header: string;

  @Input()
  public icon: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
    private tabset: TabsetComponent
  ) {
  }

  ngOnInit() {
    this.tabset.tabItems.push(this);
    this.elementRef.nativeElement.className = 'sa-tab-item tab-pane';
  }

  ngAfterViewInit() {

  }
}

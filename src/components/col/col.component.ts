import './col.component.styl';

import { Component, ElementRef, Host, Input, OnInit, Optional, SimpleChanges } from '@angular/core';

import { RowComponent } from '../row/row.component';

@Component({
  selector: 'sa-col',
  templateUrl: 'col.component.html'
})

export class ColComponent implements OnInit {

  @Input()
  public span: number = 24;

  @Input()
  public offset: number = 0;

  @Input()
  public push: number = 0;

  @Input()
  public pull: number = 0;

  @Input()
  public xs: Number | Object;

  @Input()
  public sm: Number | Object;

  @Input()
  public md: Number | Object;

  @Input()
  public lg: Number | Object;

  public get gutter() {
    return this.row.gutter || 0;
  }

  public get colStyle() {
    let styleObj: any = {};
    if (this.gutter) {
      styleObj.marginLeft = `${this.gutter / 2}px`;
      styleObj.marginRight = styleObj.marginLeft;
    }
    return styleObj;
  }

  public get colClass() {
    let classList: string[] = [];
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop !== 'span'
            ? `sa-col-${prop}-${this[prop]}`
            : `sa-col-${this[prop]}`
        );
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`sa-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `sa-col-${size}-${prop}-${props[prop]}`
              : `sa-col-${size}-${props[prop]}`
          );
        });
      }
    });
    return classList;
  }

  constructor(
    private elementRef: ElementRef,
    @Host() @Optional() private row: RowComponent
  ) {

  }

  ngOnInit() {

  }

  ngOnChanges(change: SimpleChanges) {
    this._setElementClassAndStyle();
  }

  private _setElementClassAndStyle() {
    let containerEl = this.elementRef.nativeElement as HTMLElement;
    containerEl.className = ['sa-col'].concat(this.colClass).join(' ');
    if (this.gutter) {
      containerEl.style.paddingLeft = `${this.gutter / 2}px`;
      containerEl.style.paddingRight = containerEl.style.paddingLeft;
    }
  }
}

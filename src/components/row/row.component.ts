import './row.component.styl';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sa-row',
  templateUrl: 'row.component.html'
})

export class RowComponent implements OnInit {

  @Input()
  public gutter: number = 0;

  @Input()
  public type: string;

  @Input()
  public justify: string = 'start';

  @Input()
  public align: string = 'top';

  public get rowStyle() {
    let styleObj: any = {};
    if (this.gutter) {
      styleObj.marginLeft = `-${this.gutter / 2}px`;
      styleObj.marginRight = styleObj.marginLeft;
    }
    return styleObj;
  }

  public get rowClass() {
    let cArr: string[] = [];
    if (this.justify !== 'start') {
      cArr.push(`is-justify-${this.justify}`);
    }
    if (this.align !== 'top') {
      cArr.push(`is-align-${this.align}`);
    }
    if (this.type === 'flex') {
      cArr.push('sa-row--flex');
    }
    return cArr;
  }

  ngOnInit() { }
}

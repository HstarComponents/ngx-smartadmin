import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sa-progress',
  templateUrl: 'progress.component.html'
})
export class ProgressComponent implements OnInit, OnChanges {

  private barClass: string;
  private barWidth: string;

  @Input()
  private align: string = ''; // 可选['', 'right', 'bottom']

  @Input()
  private vertical: boolean = false; // 是否垂直

  @Input()
  private striped: boolean = false; // 条纹

  @Input()
  private active: boolean = false; // 激活的

  @Input()
  private size: string = ''; // 尺寸，可选['micro', 'xs', 'sm', '', 'lg']

  @Input()
  private maxValue: number = 100; // 最大值

  @Input()
  private type: string = ''; // 类型，可选['danger', 'warning', 'success', 'info', 'primary']

  @Input()
  private class: string = ''; // 自定义class

  @Input()
  private value: number; // 给定的value

  @Input()
  private bgColorClass: string = ''; // 背景色

  ngOnInit() {

  }

  ngOnChanges(changesObj: SimpleChanges) {
    if (changesObj.value || changesObj.maxValue) {
      this.calcBarWidth();
    }
    this.calcBarClass();
  }

  private calcBarWidth(): void {
    let per = this.value / this.maxValue * 100;
    if (per !== per) { // Is NaN
      return this.barWidth = null;
    }
    if (per > 100) {
      per = 100;
    }
    this.barWidth = `${per}%`;
  }

  private calcBarClass() {
    let classArr = [];
    if (this.type) {
      classArr.push(`progress-bar-${this.type}`);
    }
    if (this.size) {
      classArr.push(`progress-${this.size}`);
    }
    if (this.align) {
      classArr.push(this.align);
    }
    if (this.vertical) {
      classArr.push('vertical');
    }
    if (this.striped) {
      classArr.push('progress-striped');
    }
    if (this.active) {
      classArr.push('active');
    }
    if (this.class) {
      classArr.push(this.class);
    }
    this.barClass = classArr.join(' ');
  }
}

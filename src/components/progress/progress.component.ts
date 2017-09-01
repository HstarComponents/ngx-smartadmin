import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sa-progress',
  templateUrl: 'progress.component.html'
})
export class ProgressComponent implements OnInit, OnChanges {

  public barClass: string;
  public barWidth: string;
  public barHeight: string;

  @Input()
  public align: string = ''; // 可选['', 'right', 'bottom']

  @Input()
  public vertical: boolean = false; // 是否垂直

  @Input()
  public striped: boolean = false; // 条纹

  @Input()
  public active: boolean = false; // 激活的

  @Input()
  public size: string = ''; // 尺寸，可选['micro', 'xs', 'sm', '', 'lg']

  @Input()
  public maxValue: number = 100; // 最大值

  @Input()
  public type: string = ''; // 类型，可选['danger', 'warning', 'success', 'info', 'primary']

  @Input()
  public class: string = ''; // 自定义class

  @Input()
  public value: number; // 给定的value

  @Input()
  public wideBar: boolean = false; // 是否是较宽样式

  @Input()
  public bgColorClass: string = ''; // 背景色

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value || changes.maxValue) {
      this.calcBarWidthOrHeight();
    }
    this.calcBarClass();
  }

  private calcBarWidthOrHeight(): void {
    let per = this.value / this.maxValue * 100;
    if (per !== per) { // Is NaN
      this.barWidth = null;
      this.barHeight = null;
      return;
    }
    if (per > 100) {
      per = 100;
    }
    if (this.vertical) {
      this.barHeight = `${per}%`;
    } else {
      this.barWidth = `${per}%`;
    }
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
    if (this.wideBar) {
      classArr.push('wide-bar');
    }
    this.barClass = classArr.join(' ');
  }
}

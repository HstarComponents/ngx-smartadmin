import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import './alert.component.styl';

@Component({
  selector: 'sa-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnChanges {

  private innerClass: string;

  @Input()
  public type: string = 'info';

  @Input()
  public alertClass: string = '';

  @Input()
  public shown: boolean = true;

  @Output()
  public shownChange: EventEmitter<boolean> = new EventEmitter();

  @Input()
  private closable: boolean = true;

  @Output()
  private close: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.setInnerClass();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type || changes.alertClass) {
      this.setInnerClass();
    }
  }

  public onCloseBtnClick() {
    this.shown = false;
    this.shownChange.emit(false);
    this.close.emit(false);
  }

  private setInnerClass() {
    this.innerClass = `alert-${this.type} ${this.alertClass}`;
  }
}

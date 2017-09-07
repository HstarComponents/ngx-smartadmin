import './alert.component.styl';

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sa-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnChanges {

  public innerClass: string;

  @Input()
  public type: string = 'info';

  @Input()
  public alertClass: string = '';

  @Input()
  public shown: boolean = true;

  @Output()
  public shownChange: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public closable: boolean = true;

  @Output()
  public onClose: EventEmitter<any> = new EventEmitter();

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

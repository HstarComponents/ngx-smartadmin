import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sa-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnChanges {

  private innerClass: string;

  @Input()
  private shown: boolean = true;

  @Output()
  private shownChange: EventEmitter<boolean> = new EventEmitter();

  @Input()
  private showCloseBtn: boolean = true;

  @Input()
  private type: string = 'info';

  @Output()
  private onClose: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.setInnerClass();
  }

  ngOnChanges(changesObj: SimpleChanges) {
    if (changesObj.type) {
      this.setInnerClass();
    }
  }

  public btnCloseClick() {
    this.shown = false;
    this.shownChange.emit(false);
    this.onClose.emit();
  }

  private setInnerClass() {
    this.innerClass = `alert-${this.type}`;
  }
}

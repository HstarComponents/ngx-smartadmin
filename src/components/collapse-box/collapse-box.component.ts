import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sa-collapse-box',
  templateUrl: 'collapse-box.component.html'
})

export class CollapseBoxComponent implements OnInit, OnChanges {

  public innerCollapsed: boolean = false;

  @Input()
  public header: string;

  @Input()
  public collapsed: boolean = false;

  @Output()
  public collapsedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() { }

  ngOnChanges(changesObj: SimpleChanges) {
    if (changesObj.collapsed) {
      this.innerCollapsed = this.collapsed;
    }
  }

  public onHeaderClick() {
    this.innerCollapsed = !this.innerCollapsed;
    this.collapsedChange.next(this.innerCollapsed);
  }
}

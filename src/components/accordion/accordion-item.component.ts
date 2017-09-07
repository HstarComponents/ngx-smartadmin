import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { AccordionComponent } from './accordion.component';

@Component({
  selector: 'sa-accordion-item',
  templateUrl: 'accordion-item.component.html'
})
export class AccordionItemComponent implements OnInit, AfterViewInit {

  private accordionItemId: string = `accordion_item_${Math.random().toString(16).slice(2)}`;

  @Input()
  public header: string;

  @Input()
  public active: boolean;

  @Output()
  public activeChange: EventEmitter<boolean> = new EventEmitter();

  constructor(public accordion: AccordionComponent) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  public changeActiveStatus() {
    this.active = !this.active;
    this.activeChange.emit(this.active);
  }
}

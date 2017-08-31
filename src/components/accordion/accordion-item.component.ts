import { Component, OnInit, Input, Output, ElementRef, AfterViewInit, OnChanges, EventEmitter } from '@angular/core';
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

  constructor(public accordion: AccordionComponent) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  public changeActiveStatus() {
    this.active = !this.active;
  }
}

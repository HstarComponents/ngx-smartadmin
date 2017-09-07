import './accordion.component.styl';

import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sa-accordion',
  templateUrl: 'accordion.component.html'
})
export class AccordionComponent implements OnInit, AfterViewInit {

  public accordionId: string = `accordion_${Math.random().toString(16).slice(2)}`;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}

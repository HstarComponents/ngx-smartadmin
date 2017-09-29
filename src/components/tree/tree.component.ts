import './tree.component.styl';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sa-tree',
  templateUrl: 'tree.component.html'
})

export class TreeComponent implements OnInit {

  public level: number = 1;

  @Input()
  public data: any[] = [];

  @Input()
  public showCheckbox: boolean = false;

  ngOnInit() { }
}

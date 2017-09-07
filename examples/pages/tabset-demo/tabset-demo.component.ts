import './tabset-demo.component.styl';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabset-demo',
  templateUrl: 'tabset-demo.component.html'
})

export class TabsetDemoComponent implements OnInit {

  public selected: string = 'tabpane-1';

  ngOnInit() { }
}

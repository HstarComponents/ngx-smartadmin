import { Component, OnInit } from '@angular/core';
import './tabset-demo.component.styl';

@Component({
  selector: 'tabset-demo',
  templateUrl: 'tabset-demo.component.html'
})

export class TabsetDemoComponent implements OnInit {

  public selected: string = 'tabpane-1';

  ngOnInit() { }
}

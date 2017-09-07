import './alert-demo.component.styl';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert-demo',
  templateUrl: 'alert-demo.component.html'
})

export class AlertDemoComponent implements OnInit {

  public shown = true;

  ngOnInit() { }

  public onClose() {
    alert('Bye Bye.');
  }
}

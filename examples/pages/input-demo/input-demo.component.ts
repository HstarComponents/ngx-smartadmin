import './input-demo.component.styl';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-demo',
  templateUrl: 'input-demo.component.html'
})

export class InputDemoComponent implements OnInit {


  public value: string = '1235';

  ngOnInit() { }

  public handleIconClick() {
    alert('您点击了五角星');
  }
}

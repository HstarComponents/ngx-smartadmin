import './date-picker-demo.component.styl';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-picker-demo',
  templateUrl: 'date-picker-demo.component.html'
})

export class DatePickerDemoComponent implements OnInit {

  public d1: Date = new Date();
  
  ngOnInit() { }
}

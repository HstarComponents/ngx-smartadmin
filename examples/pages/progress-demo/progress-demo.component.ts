import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-demo',
  templateUrl: 'progress-demo.component.html'
})

export class ProgressDemoComponent implements OnInit {

  public value25 = 25;
  public value50 = 50;
  public value75 = 75;
  public value100 = 100;
  
  ngOnInit() { }
}

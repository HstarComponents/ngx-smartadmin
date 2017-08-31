import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-container',
  templateUrl: 'demo-container.component.html'
})

export class DemoContainerComponent implements OnInit {

  public componentDocument: string = '';

  ngOnInit() { }
}

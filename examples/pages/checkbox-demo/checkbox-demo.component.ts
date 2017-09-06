import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-demo',
  templateUrl: 'checkbox-demo.component.html'
})

export class CheckboxDemoComponent implements OnInit {

  public val = false;
  public val2 = false;
  public val3 = false;
  public val4 = true;

  ngOnInit() { }
}

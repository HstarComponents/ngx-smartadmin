import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-demo',
  templateUrl: 'radio-demo.component.html'
})

export class RadioDemoComponent implements OnInit {

  public val: boolean = false;
  public val2: string = '';
  public val3: string = 'yes';
  public val4 = true;

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-group-demo',
  templateUrl: 'radio-group-demo.component.html'
})

export class RadioGroupDemoComponent implements OnInit {

  public val: string = 'a';

  public disabled: boolean = false;

  ngOnInit() { }

  public onValueChange(val: any) {
    console.log('选中项变化：', val);
  }
}

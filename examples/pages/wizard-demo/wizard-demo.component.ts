import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wizard-demo',
  templateUrl: 'wizard-demo.component.html'
})

export class WizardDemoComponent implements OnInit {

  public steps = [
    { value: '1', title: 'Validation states' },
    { value: '2', title: 'Alerts' },
    { value: '3', title: 'Payment Info' },
    { value: '4', title: 'Other Info' }
  ];
  public stepValue: string = '1';

  ngOnInit() { }

  public onStepClick(step: any) {
    this.stepValue = step.value;
  }
}

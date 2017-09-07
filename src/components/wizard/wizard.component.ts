import './wizard.component.styl';

import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Step {
  value: string;
  title: string;
};

@Component({
  selector: 'sa-wizard',
  templateUrl: 'wizard.component.html'
})
export class WizardComponent {

  @Input()
  public type: string = ''; // 可选 ['', 'fuelux']

  @Input()
  public steps: Array<Step> = [];

  @Input('value')
  public currentValue: string;

  @Input()
  public prevText: string = 'Prev';

  @Input()
  public nextText: string = 'Next';

  @Output()
  public onStepClick: EventEmitter<Step> = new EventEmitter();

  private get currentIndex() {
    return this.steps.findIndex(x => x.value === this.currentValue);
  }

  constructor() {

  }

  private prev() {
    let curIdx = this.currentIndex;
    if (curIdx > 0) {
      this.changeCurrentStep(this.steps[curIdx - 1]);
    }
  }

  private next() {
    let curIdx = this.currentIndex;
    if (curIdx < this.steps.length - 1) {
      this.changeCurrentStep(this.steps[curIdx + 1]);
    }
  }

  private changeCurrentStep(step: Step) {
    this.onStepClick.emit(step);
  }
}

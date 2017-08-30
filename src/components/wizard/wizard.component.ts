import { Component, OnInit, Input, Output, ElementRef, AfterViewInit, EventEmitter } from '@angular/core';

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
  private type: string = ''; // 可选 ['', 'fuelux']

  @Input()
  private steps: Array<Step> = [];

  @Input('value')
  private currentValue: string;

  @Input()
  private prevText: string = 'Prev';

  @Input()
  private nextText: string = 'Next';

  @Output()
  private stepClick: EventEmitter<Step> = new EventEmitter();

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
    this.stepClick.emit(step);
  }
}

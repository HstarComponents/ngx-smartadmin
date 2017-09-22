import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormComponent } from './form.component';

@Component({
  selector: 'sa-form-item',
  templateUrl: 'form-item.component.html'
})

export class FormItemComponent implements OnInit {

  @Input()
  public label: string;

  public get inline() {
    return this.form.inline;
  }

  public get labelStyle() {
    if (!this.inline) {
      return {};
    }
    return {
      width: this.form.labelWidth
    };
  }

  public get labelClass() {
    return {
      label: !this.inline,
      'control-label col-xs-1': this.inline,
      [`text-${this.form.labelPosition}`]: this.inline
    };
  }

  public get contentStyle() {
    if (!this.inline) {
      return {};
    }
    return {
      width: `calc(100% - ${this.form.labelWidth})`
    };
  }

  constructor(private form: FormComponent) {

  }

  ngOnInit() { }
}

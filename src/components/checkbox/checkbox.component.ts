import { Component, Host, HostBinding, Input, OnChanges, OnInit, Optional, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';

export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'sa-checkbox',
  templateUrl: 'checkbox.component.html',
  providers: [CHECKBOX_VALUE_ACCESSOR]
})

export class CheckboxComponent implements OnInit, OnChanges, ControlValueAccessor {

  public checked: boolean = false;
  public innerValue: boolean | any = true;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  @Input()
  public disabled: boolean = false;

  @Input()
  private value: any;

  constructor( @Optional() @Host() private checkboxGroup: CheckboxGroupComponent) {
  }

  @HostBinding('class.smart-form')
  public smartForm: boolean = true;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.innerValue = this.value === void 0 ? true : this.value;
    }
  }

  public onCheckedChange(evt: Event) {
    let checked = (evt.target as HTMLInputElement).checked;
    this.checked = checked;
    this.onChange(this.checked ? this.innerValue : null);
    // 如果有 checkbox-group，则需要反向设置value
    if (this.checkboxGroup) {
      this.checkboxGroup.notifyValueChanged();
    }
  }

  writeValue(value: any): void {
    this.checked = this.innerValue === value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

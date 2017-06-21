import { Component, OnInit, Input, forwardRef, Host, HostBinding, Optional } from '@angular/core';
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

export class CheckboxComponent implements OnInit, ControlValueAccessor {
  onChange: (_: any) => void;
  onTouched: () => void;

  public disabled: boolean = false;

  public innerValue: boolean = false;

  public isInCheckboxGroup = false;

  @Input()
  private value: any;

  constructor(
    @Optional()
    @Host()
    private checkboxGroup: CheckboxGroupComponent
  ) {
  }

  @HostBinding('class.smart-form')
  public smartForm: boolean = true;

  ngOnInit() {
  }

  public onCheckboxChanged() {
    let val;
    if (this.value) {
      val = this.innerValue ? this.value : void 0;
    } else {
      val = this.innerValue;
    }
    this.onChange && this.onChange(val);
  }

  writeValue(value: any): void {
    this.innerValue = (this.value || true) === value;
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

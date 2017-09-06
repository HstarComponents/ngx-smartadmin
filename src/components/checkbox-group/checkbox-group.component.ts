import { Component, ContentChildren, EventEmitter, HostBinding, Input, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CheckboxComponent } from '../checkbox/checkbox.component';

export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxGroupComponent),
  multi: true
};


@Component({
  selector: 'sa-checkbox-group',
  templateUrl: 'checkbox-group.component.html',
  providers: [CHECKBOX_VALUE_ACCESSOR]
})

export class CheckboxGroupComponent implements OnInit {
  private innerValue: any = [];

  @Input()
  public inline: boolean = true;

  @Input()
  public disabled: boolean = false;

  @ContentChildren(forwardRef(() => CheckboxComponent))
  public checkboxList: Array<CheckboxComponent> = [];

  @Output()
  public onValueChange: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.smart-form')
  public smartForm: boolean = true;

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled) {
      this._setCheckboxDisabled(this.disabled);
    }
  }

  public notifyValueChanged() {
    this._updateCheckboxGroupValue();
  }

  public writeValue(value: any): void {
    this.innerValue = Array.isArray(value) ? value : [];
    this._updateCheckboxListState();
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  private _updateCheckboxGroupValue() {
    this.innerValue = this.checkboxList.map(x => x.checked ? x.innerValue : null);
    this.onChange(this.innerValue);
    this.onValueChange.emit(this.innerValue);
  }

  private _updateCheckboxListState() {
    this.checkboxList.forEach((x, i) => {
      let val = this.innerValue[i];
      x.checked = x.innerValue === val;
    });
  }

  private _setCheckboxDisabled(disabled: boolean) {
    this.checkboxList.forEach(x => x.disabled = disabled);
  }
}

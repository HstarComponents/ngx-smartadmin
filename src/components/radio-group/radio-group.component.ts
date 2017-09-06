import { Component, OnInit, Input, OnChanges, forwardRef, ElementRef, SimpleChanges, ContentChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioComponent } from '../radio/radio.component';

export const RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};

@Component({
  selector: 'sa-radio-group',
  templateUrl: 'radio-group.component.html',
  providers: [RADIO_VALUE_ACCESSOR]
})
export class RadioGroupComponent implements OnInit, OnChanges {

  private innerValue: any = true;

  @Input()
  public inline: boolean = true;

  @Input()
  public disabled: boolean = false;

  @ContentChildren(forwardRef(() => RadioComponent))
  public radioList: Array<RadioComponent> = [];

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.className = 'smart-form';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled) {
      this._setRadioDisabled(this.disabled);
    }
  }

  public setRadioGroupValue(value: any) {
    this.innerValue = value;
    this.onChange(this.innerValue);
    this._setRadioValue();
  }

  public writeValue(value: any): void {
    this.innerValue = value;
    this._setRadioValue();
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  private _setRadioValue() {
    this.radioList.forEach(x => {
      x.setChecked(x.innerValue === this.innerValue);
    });
  }

  private _setRadioDisabled(disabled: boolean) {
    this.radioList.forEach(x => x.disabled = disabled);
  }
}

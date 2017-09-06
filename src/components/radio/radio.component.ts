import { Component, OnInit, Input, OnChanges, forwardRef, ElementRef, SimpleChanges, Optional } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioGroupComponent } from '../radio-group/radio-group.component';

export const RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioComponent),
  multi: true
};

@Component({
  selector: 'sa-radio',
  templateUrl: 'radio.component.html',
  providers: [RADIO_VALUE_ACCESSOR]
})
export class RadioComponent implements OnInit, OnChanges {

  @Input()
  public value: string;

  @Input()
  public disabled: boolean = false;

  @Input()
  public name: string = '';

  public innerValue: boolean | any = true;

  private checked: boolean = false;

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor(private elementRef: ElementRef, @Optional() private radioGroup: RadioGroupComponent) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.className = 'smart-form';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.innerValue = this.value === void 0 ? true : this.value;
    }
  }

  public onUserClick(evt: MouseEvent) {
    let checked = (evt.target as HTMLInputElement).checked;
    this.checked = checked;
    this.onChange(this.innerValue);
    // 如果有radio-group，则需要反向设置value
    if (this.radioGroup) {
      this.radioGroup.setRadioGroupValue(this.innerValue);
    }
  }

  public setChecked(checked: boolean) {
    this.checked = checked;
  }

  public writeValue(value: any): void {
    this.checked = this.innerValue === value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}

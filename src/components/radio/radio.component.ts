import { Component, OnInit, Input, OnChanges, forwardRef, ElementRef, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  public name: string = 'sa-radio';

  private innerValue: boolean | any = true;

  private checked: boolean = false;

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor(private elementRef: ElementRef) {
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
  }

  public writeValue(value: any): void {
    console.log(this.innerValue, value);
    this.checked = this.innerValue === value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}

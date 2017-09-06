import { Component, OnInit, Input, forwardRef, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import './switch.component.styl';

export const SWITCH_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'sa-switch',
  templateUrl: 'switch.component.html',
  providers: [SWITCH_VALUE_ACCESSOR]
})
export class SwitchComponent implements OnInit {
  @Input()
  private onText: string = 'ON';

  @Input()
  private offText: string = 'OFF';

  @Input()
  private disabled: boolean = false;

  @Input()
  private name: string = 'switch';

  private innerValue: boolean;

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.className = 'smart-form';
  }
  public onUserClick(evt: Event) {
    let checked = (evt.target as HTMLInputElement).checked;
    this.innerValue = checked;
    this.onChange(this.innerValue);
  }

  public writeValue(value: any): void {
    this.innerValue = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}

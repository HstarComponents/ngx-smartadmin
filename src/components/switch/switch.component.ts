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
  public onText: string = 'ON';

  @Input()
  public offText: string = 'OFF';

  @Input()
  public disabled: boolean = false;

  @Input()
  public name: string = '';

  private checked: boolean;

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.className = 'smart-form';
  }
  public onUserClick(evt: Event) {
    let checked = (evt.target as HTMLInputElement).checked;
    this.checked = checked;
    this.onChange(this.checked);
  }

  public writeValue(value: any): void {
    this.checked = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}

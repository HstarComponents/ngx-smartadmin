import './input-group.component.styl';

import { Component, ElementRef, Input, OnInit, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const INPUT_GROUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputGroupComponent),
  multi: true
};

@Component({
  selector: 'sa-input-group',
  templateUrl: 'input-group.component.html',
  providers: [INPUT_GROUP_VALUE_ACCESSOR]
})

export class InputGroupComponent implements OnInit, ControlValueAccessor {

  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;
  public innerValue: any;

  @Input()
  public type: string = 'text';

  public get isTextarea() {
    return this.type === 'textarea';
  }

  @Input()
  public placeholder: string = '';

  @Input()
  public disabled: boolean = false;

  @ViewChild("addonPrepend")
  public addonPrepend: ElementRef;

  public get hasPrependAddon() {
    return this.addonPrepend.nativeElement.children.length > 0;
  }

  @ViewChild("btnPrepend")
  public btnPrepend: ElementRef;

  public get hasPrependBtn() {
    return this.btnPrepend.nativeElement.children.length > 0;
  }

  @ViewChild("addonAppend")
  public addonAppend: ElementRef;

  public get hasAppendAddon() {
    return this.addonAppend.nativeElement.children.length > 0;
  }

  @ViewChild("btnAppend")
  public btnAppend: ElementRef;

  public get hasAppendBtn() {
    return this.btnAppend.nativeElement.children.length > 0;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!this.hasPrependAddon) {
      this.safeRemoveElement(this.addonPrepend);
    }
    if (!this.hasPrependBtn) {
      this.safeRemoveElement(this.btnPrepend);
    }
    if (!this.hasAppendAddon) {
      this.safeRemoveElement(this.addonAppend);
    }
    if (!this.hasAppendBtn) {
      this.safeRemoveElement(this.btnAppend);
    }
  }

  private safeRemoveElement(el: ElementRef) {
    if (el && el.nativeElement) {
      if (typeof el.nativeElement.remove === 'function') {
        el.nativeElement.remove();
      }
    }
  }

  public handleModelChange(evt: any) {
    this.onChange(evt);
  }

  writeValue(obj: any): void {
    this.innerValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

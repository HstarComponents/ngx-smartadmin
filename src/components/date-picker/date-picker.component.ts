import './date-picker.component.styl';

import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SaDate } from './SaDate';

declare var laydate: any;

export const DATE_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};

@Component({
  selector: 'sa-date-picker',
  templateUrl: 'date-picker.component.html',
  providers: [DATE_PICKER_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent implements OnInit, OnChanges, ControlValueAccessor {

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  public instance: any;
  public innerDate: Date;

  @Input()
  public disabled: boolean = false;

  @Input()
  public mode: string = 'date';

  @Input()
  public placeholder: string = '';

  @Input()
  public lang: string = 'en-us';

  @Input()
  public range: boolean | string = false;

  @Input()
  public minDate: Date;

  @Input()
  public maxDate: Date;

  @Input()
  public format: string = 'yyyy-MM-dd';

  @Input()
  public showBottom: boolean = true;

  @ViewChild("input")
  public inputEl: ElementRef;

  ngOnInit() {
    let self = this;
    let opt: any = {
      elem: this.inputEl.nativeElement,
      theme: '#393D49',
      lang: this.lang === 'en-us' ? 'en' : 'cn',
      type: this.mode,
      range: this.range,
      showBottom: this.showBottom,
      format: this.format,
      done(value: string, date: any, endDate: any) {
        console.log(value, date, endDate);
        let d = date.year ? new Date(date.year, date.month - 1, date.date, date.hours, date.minutes, date.seconds) : void (0);
        self.onChange(d);
      }
    };
    if (this.innerDate) {
      opt.value = this.innerDate;
    }
    this.instance = laydate.render(opt);
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  private _formatDate(date: Date): string {
    if (!date) {
      return '';
    }
    return (this.instance ? this.instance.config.format : 'yyyy-MM-dd')
      .replace('yyyy', date.getFullYear().toString())
      .replace('MM', this._fixedZero(date.getMonth() + 1))
      .replace('dd', this._fixedZero(date.getDate()))
      .replace('HH', this._fixedZero(date.getHours()))
      .replace('mm', this._fixedZero(date.getMinutes()))
      .replace('ss', this._fixedZero(date.getSeconds()));
  }

  private _fixedZero(v: number | string): string {
    v = '00' + v;
    return v.substring(v.length - 2);
  }

  writeValue(obj: any): void {
    let d = (obj instanceof Date) ? obj : new Date(obj);
    this.innerDate = d.toString() === 'Invalid Date' ? null : d;
    this.inputEl.nativeElement.value = this._formatDate(this.innerDate);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {

  }
}

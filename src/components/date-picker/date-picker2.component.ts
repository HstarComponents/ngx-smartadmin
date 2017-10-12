import './date-picker2.component.styl';

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { SaDate } from './SaDate';

export const DATE_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePicker2Component),
  multi: true
};

export interface DayEntity {
  number: number,
  isCurrentDay: boolean,
  isSelectedDay: boolean,
  isPrevMonth: boolean,
  isNextMonth: boolean,
  date: Date,
  disabled: boolean
}

export interface WeekEntity {
  days: Array<DayEntity>;
}

const multiLang = {
  'en-us': {
    weekLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Seq', 'Oct', 'Nov', 'Dec']
  }
};

@Component({
  selector: 'sa-date-picker',
  templateUrl: 'date-picker.component.html',
  providers: [DATE_PICKER_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None
})
export class DatePicker2Component implements OnInit, OnChanges, ControlValueAccessor {

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  public pickerShown: boolean = false;
  public labelObject: any = {};
  public monthWeeks: Array<WeekEntity> = [];
  public innerDate: Date;

  public get innerDateString() {
    if (this.innerDate) {
      return new SaDate(this.innerDate).format('yyyy/MM/dd');
    }
    return '';
  }

  public get currentYearMonth() {
    let d = this.innerDate || new Date();
    console.log(d, d.getMonth());
    let monthStr = this.labelObject.monthLabels[d.getMonth()];
    return `${monthStr} ${d.getFullYear()}`;
  }

  @Input()
  public disabled: boolean = false;

  @Input()
  public mode: string = 'day';

  @Input()
  public placeholder: string = '';

  @Input()
  public lang: string = 'en-us';

  @Input()
  public minDate: Date;

  @Input()
  public maxDate: Date;

  ngOnInit() {
    this.setLabelObject();
    this._initMonthPanel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.lang) {
      this.setLabelObject();
    }
  }

  public showDatePicker() {
    this.pickerShown = true;
  }

  public closeDatePicker() {
    // setTimeout(() => {
    //   this.pickerShown = false;
    // }, 300);
  }

  public selectDate(d: DayEntity) {
    this.innerDate = d.date;
    this.onChange(this.innerDate);
    this.pickerShown = false;
    this._initMonthPanel(this.innerDate);
  }

  public changeMonth(monthChange: number) {
    this.innerDate = new SaDate(this.innerDate).addMonths(monthChange).get();
    this._initMonthPanel(this.innerDate);
  }

  public changeYear(yearChange: number) {
    this.innerDate = new SaDate(this.innerDate).addYears(yearChange).get();
    this._initMonthPanel(this.innerDate);
  }

  private _initMonthPanel(d?: Date) {
    this.monthWeeks = this._buildMonthWeeks(d);
  }

  private setLabelObject() {
    this.labelObject = multiLang[this.lang];
  }

  private _getMonthString(d: Date) {
    return d.getMonth();
  }

  private _buildMonthWeeks(date?: Date) {
    if (!date) {
      date = new Date();
    }
    let weeks: Array<WeekEntity> = [];
    let count = 6;
    let dateCopy = new Date(date.getTime());
    dateCopy.setDate(1);
    let saDate = new SaDate(dateCopy);
    let startDate = saDate.addDays(-saDate.get().getDay()).get();
    while (count > 0) {
      weeks.push({
        days: this._buildWeekDays(startDate, date)
      });
      startDate = saDate.addDays(7).get();
      count--;
    }
    return weeks;
  }

  private _buildWeekDays(startDate: Date, currentDate: Date): Array<DayEntity> {
    let dayArr: DayEntity[] = [];
    let tempDate, tempYearMonthNumber, tempDayNumber;
    let currentYearMonthNumber = this._getYearMonthNumber(currentDate);
    let nowDayNumber = this._getDayNumber(new Date());
    for (let i = 0; i < 7; i++) {
      tempDate = new SaDate(startDate).addDays(i).get();
      tempYearMonthNumber = this._getYearMonthNumber(tempDate);
      tempDayNumber = this._getDayNumber(tempDate);
      dayArr.push({
        number: tempDate.getDate(),
        isCurrentDay: tempDayNumber === nowDayNumber,
        isSelectedDay: tempDayNumber === this._getDayNumber(currentDate),
        isPrevMonth: tempYearMonthNumber < currentYearMonthNumber,
        isNextMonth: tempYearMonthNumber > currentYearMonthNumber,
        date: tempDate,
        disabled: false
      });
    }
    return dayArr;
  }

  private _getYearMonthNumber(date: Date): number {
    return +(date.getFullYear() + (date.getMonth() + 10).toString()) - 10;
  }

  private _getDayNumber(date: Date) {
    return +(date.getFullYear() + (date.getMonth() + 10).toString() + (date.getDate() + 10).toString()) - 1010;
  }


  writeValue(obj: any): void {
    this.innerDate = (obj instanceof Date) ? obj : new Date(obj);
    this._initMonthPanel(this.innerDate);
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

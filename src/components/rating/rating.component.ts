import { Component, OnInit, Input, OnChanges, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const RATING_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RatingComponent),
  multi: true
};

@Component({
  selector: 'sa-rating',
  templateUrl: 'rating.component.html',
  providers: [RATING_VALUE_ACCESSOR]
})
export class RatingComponent implements ControlValueAccessor, OnInit {

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  private value: number = 0;
  private hoverIdx: number = 0;
  private rateArr: any[] = [];

  @Input()
  private maxNum: number = 5;

  @Input()
  private rateClass: string = 'fa fa-star';

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.className = 'smart-form';
    this.updateRateArr();
  }

  ngOnChanges(changesObj: SimpleChanges) {
    if (changesObj.maxNum) {
      this.updateRateArr();
    }
  }

  public onClick(v: number) {
    this.value = v;
    this.onChange(v);
  }

  public onMouseLeave() {
    this.hoverIdx = 0;
  }

  public onMouseEnter(v: number) {
    this.hoverIdx = v;
  }

  private updateRateArr() {
    let arr = [];
    for (let i = 1; i <= this.maxNum; i++) {
      arr.push(i);
    }
    this.rateArr = arr;
  }

  public writeValue(value: any): void {
    this.value = +value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}

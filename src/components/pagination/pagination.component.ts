import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const PAGINATION_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PaginationComponent),
  multi: true
};

const MAX_PAGE_BUTTON_COUNT = 10;

@Component({
  selector: 'sa-pagination',
  templateUrl: 'pagination.component.html',
  providers: [PAGINATION_VALUE_ACCESSOR]
})

export class PaginationComponent implements ControlValueAccessor, OnInit, OnChanges {

  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;
  public paginationClass: string = '';
  public pageIndex: number = 1;
  private _pageSize: number = 10;
  public pageCount: number = 1;
  public pages: Array<any> = [];

  @Input()
  public size: string = '';

  @Input()
  public alt: boolean = false;

  @Input()
  public totalCount: number = 0;

  @Input()
  public set pageSize(val: number) {
    this._pageSize = Math.floor(Math.max(1, val));
  }

  @Output()
  public onPageChange: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.size || changes.alt) {
      this.setPaginationClass();
    }
    if (changes.totalCount || changes.pageSize) {
      this.calcPageInfo();
    }
  }

  pageClick(p: number) {
    if (p < 1) { return; }
    if (p > this.pageCount) { return; }
    this.pageIndex = p;
    this.emitValue();
    this.buildPages();
  }

  public writeValue(value: any): void {
    this.pageIndex = Math.max(1, +value);
    this.buildPages();
    this.onPageChange.next(this.pageIndex);
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  private emitValue() {
    this.onChange(this.pageIndex);
    this.onPageChange.next(this.pageIndex);
  }

  private setPaginationClass() {
    let tmpClass = '';
    if (this.alt) {
      tmpClass += ' pagination-alt';
    }
    if (this.size) {
      tmpClass += ` pagination-${this.size}`;
    }
    return this.paginationClass = tmpClass;
  }

  private buildPages() {
    let result = [];
    let startIndex;
    let endIndex;
    let needHead = false;
    let needFoot = false;
    if (this.pageCount <= MAX_PAGE_BUTTON_COUNT) {
      startIndex = 1;
      endIndex = this.pageCount;
    } else {
      if (this.pageCount - this.pageIndex < MAX_PAGE_BUTTON_COUNT) { // 在最后10页内
        endIndex = this.pageCount;
        startIndex = this.pageCount - MAX_PAGE_BUTTON_COUNT + 1;
        needHead = true;
      } else { // 常规
        startIndex = (Math.ceil(this.pageIndex / MAX_PAGE_BUTTON_COUNT) - 1) * MAX_PAGE_BUTTON_COUNT + 1;
        endIndex = startIndex + MAX_PAGE_BUTTON_COUNT - 1;
        if (this.pageIndex > MAX_PAGE_BUTTON_COUNT) {
          needHead = true;
        }
        needFoot = true;
      }
    }
    for (let i = startIndex; i <= endIndex; i++) {
      result.push({ value: i, text: i });
    }
    if (needHead) {
      result.unshift({ text: '...', value: startIndex - 1, });
    }
    if (needFoot) {
      result.push({ text: '...', value: endIndex + 1 });
    }
    this.pages = result;
  }

  private calcPageInfo() {
    this.pageCount = Math.ceil(this.totalCount / this._pageSize);
    this.buildPages();
    if (this.pageIndex > this.pageCount) {
      this.pageIndex = this.pageCount;
      this.buildPages();
      setTimeout(() => {
        this.emitValue();
      });
    }
  }
}

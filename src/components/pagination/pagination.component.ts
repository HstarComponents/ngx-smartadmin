import { Component, Input, Output, EventEmitter, OnInit, OnChanges, forwardRef, SimpleChanges } from '@angular/core';
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
  private paginationClass: string = '';
  private pageIndex: number = 1;
  private _pageSize: number = 10;
  private pageCount: number = 1;
  private pages: Array<any> = [];

  @Input()
  private size: string = '';

  @Input()
  private alt: boolean = false;

  @Input()
  private totalCount: number = 0;

  @Input()
  private set pageSize(val: number) {
    this._pageSize = Math.floor(Math.max(1, val));
  }

  @Output()
  private pageChanged: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
  }

  ngOnChanges(changesObj: SimpleChanges) {
    if (changesObj.size || changesObj.alt) {
      this.setPaginationClass();
    }
    if (changesObj.totalCount || changesObj.pageSize) {
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
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  private emitValue() {
    this.onChange(this.pageIndex);
    this.pageChanged.next(this.pageIndex);
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

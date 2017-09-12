import './table.component.styl';

import { Component, ContentChildren, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges } from '@angular/core';

import { TableColumnDirective } from './table-column.directive';

export interface PagingObject {
  pageIndex: number
};

@Component({
  selector: 'sa-table',
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit, OnChanges {

  public columns: Array<any> = [];
  public innerSource: Array<any> = [];
  public innerPageIndex = 1;
  public innerPageSize = 20;

  // public get pageIndex() {
  //   return this._pageIndex;
  // }
  // public set pageIndex(v) {
  //   this._pageIndex = v;
  //   this.setDataItems();
  //   this.onPaging.next({ pageIndex: v });
  // }

  private get currentEndIdx() {
    return Math.min(this.pageSize * this.pageIndex, this.totalCount);
  }

  @Input()
  public source: Array<any> = [];

  @Input()
  public pageable: boolean = false;

  @Input()
  public pageSizeList = [10, 20, 50];

  @Input()
  public showPageSizeList: boolean = true;

  @Input()
  public pageSize: number = 20;

  @Output()
  public pageSizeChange: EventEmitter<number> = new EventEmitter();

  @Input()
  public pageIndex: number = 1;

  @Output()
  public pageIndexChange: EventEmitter<number> = new EventEmitter();

  @Input()
  public serverPaging: boolean = false;

  @Input()
  public totalCount: number = 0;

  @Output()
  private onSorting: EventEmitter<any> = new EventEmitter();

  @Output()
  private onPaging: EventEmitter<PagingObject> = new EventEmitter();

  @Output()
  private onRowClick: EventEmitter<any> = new EventEmitter();

  @Output()
  private onPageSizeChange: EventEmitter<number> = new EventEmitter();

  @ContentChildren(TableColumnDirective)
  private set columnTemplates(val: QueryList<TableColumnDirective>) {
    if (val) {
      this.columns = val.toArray();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pageIndex) {
      this.innerPageIndex = this.pageIndex;
    }
    if (changes.pageSize) {
      this.innerPageSize = this.pageSize;
    }
    this.setDataItems();
  }

  public onInnerPageChange(pageIndex: number) {
    this.innerPageIndex = pageIndex;
    this.pageIndexChange.emit(pageIndex);
    this.onPaging.emit({ pageIndex });
    this.setDataItems();
  }

  public onPageSizeSelectChange(val: number) {
    this.innerPageSize = +val;
    this.onPageSizeChange.emit(this.innerPageSize);
    this.setDataItems();
  }

  public onHeaderClick(column: any) {
    if (column.sortable) {
      for (let c of this.columns) {
        if (c !== column) {
          c.sort = '';
        }
      }
      switch (column.sort) {
        case '':
        case 'desc':
          column.sort = 'asc';
          break;
        case 'asc':
          column.sort = 'desc';
          break;
      }
      this.onSorting.next({
        field: column.field,
        header: column.header,
        sort: column.sort
      });
      setTimeout(() => {
        this.setDataItems();
      });
    }
  }

  public rowClick(rowData: any, evt: any) {
    this.onRowClick.emit(rowData);
  }

  private setDataItems() {
    if (!this.serverPaging) {
      let result = [];
      let startIdx = this.innerPageSize * (this.innerPageIndex - 1);
      let endIdx = Math.min(startIdx + this.innerPageSize, this.source.length);
      for (let i = startIdx; i < endIdx; i++) {
        result.push(this.source[i]);
      }
      this.innerSource = result;
    } else {
      this.innerSource = this.source;
    }
  }
}

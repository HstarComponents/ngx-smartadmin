import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const PAGINATION_VALUE_ACCESSOR: any;
export declare class PaginationComponent implements ControlValueAccessor, OnInit, OnChanges {
    private onChange;
    private onTouched;
    private paginationClass;
    private pageIndex;
    private _pageSize;
    private pageCount;
    private pages;
    private size;
    private alt;
    private totalCount;
    private pageSize;
    private pageChanged;
    ngOnInit(): void;
    ngOnChanges(changesObj: SimpleChanges): void;
    pageClick(p: number): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    private emitValue();
    private setPaginationClass();
    private buildPages();
    private calcPageInfo();
}

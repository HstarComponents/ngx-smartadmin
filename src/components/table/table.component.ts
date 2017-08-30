import { Component, OnInit, Input, ContentChildren, QueryList, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TableColumnDirective } from './table-column.directive';

@Component({
    selector: 'sa-table',
    templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit, OnChanges {

    private columns: Array<any> = [];
    private _pageIndex: number = 1;

    private dataItems: Array<any> = [];

    private get _totalCount() {
        return this.serverPaging ? this.totalCount : this.dataSource.length;
    }

    private get pageIndex() {
        return this._pageIndex;
    }
    private set pageIndex(v) {
        this._pageIndex = v;
        this.setDataItems();
        this.onPaging.next({ pageIndex: v });
    }

    private get currentEndIdx() {
        return Math.min(this.pageSize * this.pageIndex, this._totalCount);
    }

    @Input()
    private dataSource: Array<any> = [];

    @Input()
    private pageable: boolean = false;

    @Input()
    private pageSizeList = [10, 20, 50];

    @Input()
    private showPageSizeList: boolean = true;

    @Input()
    private pageSize: number = 20;

    @Input()
    private serverPaging: boolean = false;

    @Input()
    private totalCount: number = 0;

    @ContentChildren(TableColumnDirective)
    private set columnTemplates(val: QueryList<TableColumnDirective>) {
        if (val) {
            this.columns = val.toArray();
        }
    }

    @Output()
    private onSorting: EventEmitter<any> = new EventEmitter();

    @Output()
    private onPaging: EventEmitter<any> = new EventEmitter();

    @Output()
    private onRowClick: EventEmitter<any> = new EventEmitter();

    @Output()
    private onPageSizeChanged: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changesObj: SimpleChanges) {
        if (changesObj.dataSource) {
            this.setDataItems();
        }
    }

    public onPageSizeSelectChange(val: number) {
        this.pageSize = val;
        this.onPageSizeChanged.next(val);
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
        if (!this.serverPaging && this.pageable) {
            let result = [];
            let startIdx = this.pageSize * (this.pageIndex - 1);
            let endIdx = Math.min(startIdx + this.pageSize, this.dataSource.length);
            for (let i = startIdx; i < endIdx; i++) {
                result.push(this.dataSource[i]);
            }
            this.dataItems = result;
        } else {
            this.dataItems = this.dataSource;
        }
    }
}

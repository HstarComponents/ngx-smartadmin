"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var table_column_directive_1 = require("./table-column.directive");
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.columns = [];
        this._pageIndex = 1;
        this.dataItems = [];
        this.dataSource = [];
        this.pageable = false;
        this.pageSizeList = [10, 20, 50];
        this.showPageSizeList = true;
        this.pageSize = 20;
        this.serverPaging = false;
        this.totalCount = 0;
        this.onSorting = new core_1.EventEmitter();
        this.onPaging = new core_1.EventEmitter();
        this.onRowClick = new core_1.EventEmitter();
        this.onPageSizeChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(TableComponent.prototype, "_totalCount", {
        get: function () {
            return this.serverPaging ? this.totalCount : this.dataSource.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "pageIndex", {
        get: function () {
            return this._pageIndex;
        },
        set: function (v) {
            this._pageIndex = v;
            this.setDataItems();
            this.onPaging.next({ pageIndex: v });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "currentEndIdx", {
        get: function () {
            return Math.min(this.pageSize * this.pageIndex, this._totalCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columnTemplates", {
        set: function (val) {
            if (val) {
                this.columns = val.toArray();
            }
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.ngOnChanges = function (changesObj) {
        if (changesObj.dataSource) {
            this.setDataItems();
        }
    };
    TableComponent.prototype.onPageSizeSelectChange = function (val) {
        this.pageSize = val;
        this.onPageSizeChanged.next(val);
    };
    TableComponent.prototype.onHeaderClick = function (column) {
        var _this = this;
        if (column.sortable) {
            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
                var c = _a[_i];
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
            setTimeout(function () {
                _this.setDataItems();
            });
        }
    };
    TableComponent.prototype.rowClick = function (rowData, evt) {
        this.onRowClick.emit(rowData);
    };
    TableComponent.prototype.setDataItems = function () {
        if (!this.serverPaging && this.pageable) {
            var result = [];
            var startIdx = this.pageSize * (this.pageIndex - 1);
            var endIdx = Math.min(startIdx + this.pageSize, this.dataSource.length);
            for (var i = startIdx; i < endIdx; i++) {
                result.push(this.dataSource[i]);
            }
            this.dataItems = result;
        }
        else {
            this.dataItems = this.dataSource;
        }
    };
    TableComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-table',
                    templateUrl: 'table.component.html',
                },] },
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        'dataSource': [{ type: core_1.Input },],
        'pageable': [{ type: core_1.Input },],
        'pageSizeList': [{ type: core_1.Input },],
        'showPageSizeList': [{ type: core_1.Input },],
        'pageSize': [{ type: core_1.Input },],
        'serverPaging': [{ type: core_1.Input },],
        'totalCount': [{ type: core_1.Input },],
        'columnTemplates': [{ type: core_1.ContentChildren, args: [table_column_directive_1.TableColumnDirective,] },],
        'onSorting': [{ type: core_1.Output },],
        'onPaging': [{ type: core_1.Output },],
        'onRowClick': [{ type: core_1.Output },],
        'onPageSizeChanged': [{ type: core_1.Output },],
    };
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map
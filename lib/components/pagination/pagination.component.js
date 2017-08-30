"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.PAGINATION_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return PaginationComponent; }),
    multi: true
};
var MAX_PAGE_BUTTON_COUNT = 10;
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.paginationClass = '';
        this.pageIndex = 1;
        this._pageSize = 10;
        this.pageCount = 1;
        this.pages = [];
        this.size = '';
        this.alt = false;
        this.totalCount = 0;
        this.pageChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(PaginationComponent.prototype, "pageSize", {
        set: function (val) {
            this._pageSize = Math.floor(Math.max(1, val));
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.ngOnChanges = function (changesObj) {
        if (changesObj.size || changesObj.alt) {
            this.setPaginationClass();
        }
        if (changesObj.totalCount || changesObj.pageSize) {
            this.calcPageInfo();
        }
    };
    PaginationComponent.prototype.pageClick = function (p) {
        if (p < 1) {
            return;
        }
        if (p > this.pageCount) {
            return;
        }
        this.pageIndex = p;
        this.emitValue();
        this.buildPages();
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.pageIndex = Math.max(1, +value);
        this.buildPages();
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.emitValue = function () {
        this.onChange(this.pageIndex);
        this.pageChanged.next(this.pageIndex);
    };
    PaginationComponent.prototype.setPaginationClass = function () {
        var tmpClass = '';
        if (this.alt) {
            tmpClass += ' pagination-alt';
        }
        if (this.size) {
            tmpClass += " pagination-" + this.size;
        }
        return this.paginationClass = tmpClass;
    };
    PaginationComponent.prototype.buildPages = function () {
        var result = [];
        var startIndex;
        var endIndex;
        var needHead = false;
        var needFoot = false;
        if (this.pageCount <= MAX_PAGE_BUTTON_COUNT) {
            startIndex = 1;
            endIndex = this.pageCount;
        }
        else {
            if (this.pageCount - this.pageIndex < MAX_PAGE_BUTTON_COUNT) {
                endIndex = this.pageCount;
                startIndex = this.pageCount - MAX_PAGE_BUTTON_COUNT + 1;
                needHead = true;
            }
            else {
                startIndex = (Math.ceil(this.pageIndex / MAX_PAGE_BUTTON_COUNT) - 1) * MAX_PAGE_BUTTON_COUNT + 1;
                endIndex = startIndex + MAX_PAGE_BUTTON_COUNT - 1;
                if (this.pageIndex > MAX_PAGE_BUTTON_COUNT) {
                    needHead = true;
                }
                needFoot = true;
            }
        }
        for (var i = startIndex; i <= endIndex; i++) {
            result.push({ value: i, text: i });
        }
        if (needHead) {
            result.unshift({ text: '...', value: startIndex - 1, });
        }
        if (needFoot) {
            result.push({ text: '...', value: endIndex + 1 });
        }
        this.pages = result;
    };
    PaginationComponent.prototype.calcPageInfo = function () {
        var _this = this;
        this.pageCount = Math.ceil(this.totalCount / this._pageSize);
        this.buildPages();
        if (this.pageIndex > this.pageCount) {
            this.pageIndex = this.pageCount;
            this.buildPages();
            setTimeout(function () {
                _this.emitValue();
            });
        }
    };
    PaginationComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-pagination',
                    templateUrl: 'pagination.component.html',
                    providers: [exports.PAGINATION_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return []; };
    PaginationComponent.propDecorators = {
        'size': [{ type: core_1.Input },],
        'alt': [{ type: core_1.Input },],
        'totalCount': [{ type: core_1.Input },],
        'pageSize': [{ type: core_1.Input },],
        'pageChanged': [{ type: core_1.Output },],
    };
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var column_cell_directive_1 = require("./column-cell.directive");
var TableColumnDirective = /** @class */ (function () {
    function TableColumnDirective() {
        this.sort = '';
        this.header = '';
        this.width = 'auto';
        this.sortable = false;
    }
    Object.defineProperty(TableColumnDirective.prototype, "styleWidth", {
        get: function () {
            return this.width === 'auto' ? 'auto' : this.width + "px";
        },
        enumerable: true,
        configurable: true
    });
    TableColumnDirective.prototype.ngOnInit = function () { };
    TableColumnDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'sa-table-column'
                },] },
    ];
    /** @nocollapse */
    TableColumnDirective.ctorParameters = function () { return []; };
    TableColumnDirective.propDecorators = {
        'header': [{ type: core_1.Input },],
        'field': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'sortable': [{ type: core_1.Input },],
        'cellTemplate': [{ type: core_1.Input }, { type: core_1.ContentChild, args: [column_cell_directive_1.TableCellDirective, { read: core_1.TemplateRef },] },],
    };
    return TableColumnDirective;
}());
exports.TableColumnDirective = TableColumnDirective;
//# sourceMappingURL=table-column.directive.js.map
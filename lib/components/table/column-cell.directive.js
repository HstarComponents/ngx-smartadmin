"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TableCellDirective = /** @class */ (function () {
    function TableCellDirective(template) {
        this.template = template;
    }
    TableCellDirective.prototype.ngOnInit = function () {
    };
    TableCellDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[saTableCellTemplate]'
                },] },
    ];
    /** @nocollapse */
    TableCellDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return TableCellDirective;
}());
exports.TableCellDirective = TableCellDirective;
//# sourceMappingURL=column-cell.directive.js.map
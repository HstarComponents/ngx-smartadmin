"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CollapseBoxComponent = /** @class */ (function () {
    function CollapseBoxComponent() {
        this.innerCollapsed = false;
        this.collapsed = false;
        this.collapsedChange = new core_1.EventEmitter();
    }
    CollapseBoxComponent.prototype.ngOnInit = function () { };
    CollapseBoxComponent.prototype.ngOnChanges = function (changesObj) {
        if (changesObj.collapsed) {
            this.innerCollapsed = this.collapsed;
        }
    };
    CollapseBoxComponent.prototype.onHeaderClick = function () {
        this.innerCollapsed = !this.innerCollapsed;
        this.collapsedChange.next(this.innerCollapsed);
    };
    CollapseBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-collapse-box',
                    templateUrl: 'collapse-box.component.html'
                },] },
    ];
    /** @nocollapse */
    CollapseBoxComponent.ctorParameters = function () { return []; };
    CollapseBoxComponent.propDecorators = {
        'header': [{ type: core_1.Input },],
        'collapsed': [{ type: core_1.Input },],
        'collapsedChange': [{ type: core_1.Output },],
    };
    return CollapseBoxComponent;
}());
exports.CollapseBoxComponent = CollapseBoxComponent;
//# sourceMappingURL=collapse-box.component.js.map
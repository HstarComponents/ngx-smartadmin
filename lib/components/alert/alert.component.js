"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.shown = true;
        this.shownChange = new core_1.EventEmitter();
        this.showCloseBtn = true;
        this.type = 'info';
        this.onClose = new core_1.EventEmitter();
    }
    AlertComponent.prototype.ngOnInit = function () {
        this.setInnerClass();
    };
    AlertComponent.prototype.ngOnChanges = function (changesObj) {
        if (changesObj.type) {
            this.setInnerClass();
        }
    };
    AlertComponent.prototype.btnCloseClick = function () {
        this.shown = false;
        this.shownChange.emit(false);
        this.onClose.emit();
    };
    AlertComponent.prototype.setInnerClass = function () {
        this.innerClass = "alert-" + this.type;
    };
    AlertComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-alert',
                    templateUrl: 'alert.component.html'
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        'shown': [{ type: core_1.Input },],
        'shownChange': [{ type: core_1.Output },],
        'showCloseBtn': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'onClose': [{ type: core_1.Output },],
    };
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map
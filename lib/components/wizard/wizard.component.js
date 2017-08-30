"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
;
var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this.type = ''; // 可选 ['', 'fuelux']
        this.steps = [];
        this.prevText = 'Prev';
        this.nextText = 'Next';
        this.stepClick = new core_1.EventEmitter();
    }
    Object.defineProperty(WizardComponent.prototype, "currentIndex", {
        get: function () {
            var _this = this;
            return this.steps.findIndex(function (x) { return x.value === _this.currentValue; });
        },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.prev = function () {
        var curIdx = this.currentIndex;
        if (curIdx > 0) {
            this.changeCurrentStep(this.steps[curIdx - 1]);
        }
    };
    WizardComponent.prototype.next = function () {
        var curIdx = this.currentIndex;
        if (curIdx < this.steps.length - 1) {
            this.changeCurrentStep(this.steps[curIdx + 1]);
        }
    };
    WizardComponent.prototype.changeCurrentStep = function (step) {
        this.stepClick.emit(step);
    };
    WizardComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-wizard',
                    templateUrl: 'wizard.component.html'
                },] },
    ];
    /** @nocollapse */
    WizardComponent.ctorParameters = function () { return []; };
    WizardComponent.propDecorators = {
        'type': [{ type: core_1.Input },],
        'steps': [{ type: core_1.Input },],
        'currentValue': [{ type: core_1.Input, args: ['value',] },],
        'prevText': [{ type: core_1.Input },],
        'nextText': [{ type: core_1.Input },],
        'stepClick': [{ type: core_1.Output },],
    };
    return WizardComponent;
}());
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=wizard.component.js.map
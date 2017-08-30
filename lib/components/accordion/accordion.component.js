"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this.accordionId = "accordion_" + Math.random().toString(16).slice(2);
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    AccordionComponent.prototype.ngAfterViewInit = function () {
    };
    AccordionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-accordion',
                    templateUrl: 'accordion.component.html'
                },] },
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return []; };
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map
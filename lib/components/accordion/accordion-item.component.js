"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var accordion_component_1 = require("./accordion.component");
var AccordionItemComponent = /** @class */ (function () {
    function AccordionItemComponent(accordion) {
        this.accordion = accordion;
        this.accordionItemId = "accordion_item_" + Math.random().toString(16).slice(2);
    }
    AccordionItemComponent.prototype.ngOnInit = function () {
    };
    AccordionItemComponent.prototype.ngAfterViewInit = function () {
    };
    AccordionItemComponent.prototype.changeActiveStatus = function () {
        this.active = !this.active;
    };
    AccordionItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-accordion-item',
                    templateUrl: 'accordion-item.component.html'
                },] },
    ];
    /** @nocollapse */
    AccordionItemComponent.ctorParameters = function () { return [
        { type: accordion_component_1.AccordionComponent, },
    ]; };
    AccordionItemComponent.propDecorators = {
        'header': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
    };
    return AccordionItemComponent;
}());
exports.AccordionItemComponent = AccordionItemComponent;
//# sourceMappingURL=accordion-item.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tabset_component_1 = require("./tabset.component");
var TabItemComponent = /** @class */ (function () {
    function TabItemComponent(elementRef, renderer, tabset) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.tabset = tabset;
        this._active = false;
    }
    Object.defineProperty(TabItemComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (val) {
            this._active = val;
            this.renderer.setElementClass(this.elementRef.nativeElement, 'active', val);
        },
        enumerable: true,
        configurable: true
    });
    TabItemComponent.prototype.ngOnInit = function () {
        this.tabset.tabItems.push(this);
        this.elementRef.nativeElement.className = 'sa-tab-item tab-pane';
    };
    TabItemComponent.prototype.ngAfterViewInit = function () {
    };
    TabItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-tab-item',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    TabItemComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: tabset_component_1.TabsetComponent, },
    ]; };
    TabItemComponent.propDecorators = {
        'header': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
    };
    return TabItemComponent;
}());
exports.TabItemComponent = TabItemComponent;
//# sourceMappingURL=tab-item.component.js.map
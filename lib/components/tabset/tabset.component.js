"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent() {
        this._selectIndex = 0;
        this.tabItems = [];
        this.selectIndexChange = new core_1.EventEmitter();
    }
    Object.defineProperty(TabsetComponent.prototype, "selectIndex", {
        set: function (val) {
            this._selectIndex = val;
            this.selectIndexChange.emit(this._selectIndex);
            this.setActiveItem(this._selectIndex);
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnInit = function () { };
    TabsetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setActiveItem(_this._selectIndex);
        });
    };
    TabsetComponent.prototype.setActiveItem = function (tabItem) {
        var _this = this;
        var isIndex = typeof tabItem === 'number';
        this.tabItems.forEach(function (item, idx) {
            item.active = isIndex ? (tabItem === idx) : (tabItem === item);
            if (!isIndex && tabItem === item) {
                _this.selectIndexChange.emit(idx);
            }
        });
    };
    TabsetComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-tabset',
                    templateUrl: 'tabset.component.html'
                },] },
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return []; };
    TabsetComponent.propDecorators = {
        'selectIndex': [{ type: core_1.Input },],
        'selectIndexChange': [{ type: core_1.Output },],
    };
    return TabsetComponent;
}());
exports.TabsetComponent = TabsetComponent;
//# sourceMappingURL=tabset.component.js.map
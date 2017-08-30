"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WidgetComponent = /** @class */ (function () {
    function WidgetComponent(elementRef) {
        this.elementRef = elementRef;
        this.allowColors = [
            'green', 'greenDark', 'greenLight',
            'purple', 'magenta', 'pink',
            'pinkDark', 'blueLight', 'teal',
            'blue', 'blueDark', 'darken',
            'yellow', 'orange', 'orangeDark',
            'red', 'redLight', 'white'
        ];
        this.widgetColorClass = '';
        this.fullScreenMode = false;
        this.widgetCollapsed = false;
        this.hasCustomHeader = false;
        this.hasCustomToolbar = false;
        this.showCollapseBtn = true;
        this.showFullscreenBtn = false;
        this.showPickColorBtn = false;
        this.defaultColor = '';
    }
    WidgetComponent.prototype.ngOnInit = function () {
        this.hasCustomHeader = !!this.customHeader.nativeElement.querySelector('[slot=header]');
        this.hasCustomToolbar = !!this.customToolbar.nativeElement.querySelector('[slot=toolbar]');
        this.widgetColorClass = "jarviswidget-color-" + this.defaultColor;
    };
    WidgetComponent.prototype.ngOnChanges = function (changesObj) {
        if (changesObj.defaultColor) {
            this.changeWidgetColor(this.defaultColor);
        }
    };
    WidgetComponent.prototype.changeWidgetColor = function (color) {
        if (!color) {
            return this.widgetColorClass = '';
        }
        this.widgetColorClass = "jarviswidget-color-" + color;
    };
    WidgetComponent.prototype.toggleFullScreen = function () {
        this.fullScreenMode = !this.fullScreenMode;
    };
    WidgetComponent.prototype.toggleCollapse = function () {
        this.widgetCollapsed = !this.widgetCollapsed;
    };
    WidgetComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-widget',
                    templateUrl: 'widget.component.html'
                },] },
    ];
    /** @nocollapse */
    WidgetComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    WidgetComponent.propDecorators = {
        'header': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'showCollapseBtn': [{ type: core_1.Input },],
        'showFullscreenBtn': [{ type: core_1.Input },],
        'showPickColorBtn': [{ type: core_1.Input },],
        'defaultColor': [{ type: core_1.Input },],
        'customHeader': [{ type: core_1.ViewChild, args: ['customHeader',] },],
        'customToolbar': [{ type: core_1.ViewChild, args: ['toolbar',] },],
    };
    return WidgetComponent;
}());
exports.WidgetComponent = WidgetComponent;
//# sourceMappingURL=widget.component.js.map
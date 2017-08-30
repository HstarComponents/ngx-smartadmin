"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.RATING_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(elementRef) {
        this.elementRef = elementRef;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.value = 0;
        this.hoverIdx = 0;
        this.rateArr = [];
        this.maxNum = 5;
        this.rateClass = 'fa fa-star';
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.className = 'smart-form';
        this.updateRateArr();
    };
    RatingComponent.prototype.ngOnChanges = function (changesObj) {
        if (changesObj.maxNum) {
            this.updateRateArr();
        }
    };
    RatingComponent.prototype.onClick = function (v) {
        this.value = v;
        this.onChange(v);
    };
    RatingComponent.prototype.onMouseLeave = function () {
        this.hoverIdx = 0;
    };
    RatingComponent.prototype.onMouseEnter = function (v) {
        this.hoverIdx = v;
    };
    RatingComponent.prototype.updateRateArr = function () {
        var arr = [];
        for (var i = 1; i <= this.maxNum; i++) {
            arr.push(i);
        }
        this.rateArr = arr;
    };
    RatingComponent.prototype.writeValue = function (value) {
        this.value = +value;
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RatingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-rating',
                    templateUrl: 'rating.component.html',
                    providers: [exports.RATING_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    RatingComponent.propDecorators = {
        'maxNum': [{ type: core_1.Input },],
        'rateClass': [{ type: core_1.Input },],
    };
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var checkbox_group_component_1 = require("../checkbox-group/checkbox-group.component");
exports.CHECKBOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(checkboxGroup) {
        this.checkboxGroup = checkboxGroup;
        this.disabled = false;
        this.innerValue = false;
        this.isInCheckboxGroup = false;
        this.smartForm = true;
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.onCheckboxChanged = function () {
        var val;
        if (this.value) {
            val = this.innerValue ? this.value : void 0;
        }
        else {
            val = this.innerValue;
        }
        this.onChange && this.onChange(val);
    };
    CheckboxComponent.prototype.writeValue = function (value) {
        this.innerValue = (this.value || true) === value;
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    CheckboxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-checkbox',
                    templateUrl: 'checkbox.component.html',
                    providers: [exports.CHECKBOX_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: checkbox_group_component_1.CheckboxGroupComponent, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
    ]; };
    CheckboxComponent.propDecorators = {
        'value': [{ type: core_1.Input },],
        'smartForm': [{ type: core_1.HostBinding, args: ['class.smart-form',] },],
    };
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
//# sourceMappingURL=checkbox.component.js.map
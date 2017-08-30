import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';
export declare const CHECKBOX_VALUE_ACCESSOR: any;
export declare class CheckboxComponent implements OnInit, ControlValueAccessor {
    private checkboxGroup;
    onChange: (_: any) => void;
    onTouched: () => void;
    disabled: boolean;
    innerValue: boolean;
    isInCheckboxGroup: boolean;
    private value;
    constructor(checkboxGroup: CheckboxGroupComponent);
    smartForm: boolean;
    ngOnInit(): void;
    onCheckboxChanged(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
}

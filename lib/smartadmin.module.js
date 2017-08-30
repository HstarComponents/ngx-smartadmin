"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var components_1 = require("./components");
var SmartAdminModule = /** @class */ (function () {
    function SmartAdminModule() {
    }
    SmartAdminModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule
                    ],
                    exports: components_1.ALL_COMPONENTS.slice(),
                    declarations: components_1.ALL_COMPONENTS.slice(),
                    providers: []
                },] },
    ];
    /** @nocollapse */
    SmartAdminModule.ctorParameters = function () { return []; };
    return SmartAdminModule;
}());
exports.SmartAdminModule = SmartAdminModule;
//# sourceMappingURL=smartadmin.module.js.map
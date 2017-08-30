"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.align = ''; // 可选['', 'right', 'bottom']
        this.vertical = false; // 是否垂直
        this.striped = false; // 条纹
        this.active = false; // 激活的
        this.size = ''; // 尺寸，可选['micro', 'xs', 'sm', '', 'lg']
        this.maxValue = 100; // 最大值
        this.type = ''; // 类型，可选['danger', 'warning', 'success', 'info', 'primary']
        this.class = ''; // 自定义class
        this.bgColorClass = ''; // 背景色
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    ProgressComponent.prototype.ngOnChanges = function (changesObj) {
        if (changesObj.value || changesObj.maxValue) {
            this.calcBarWidth();
        }
        this.calcBarClass();
    };
    ProgressComponent.prototype.calcBarWidth = function () {
        var per = this.value / this.maxValue * 100;
        if (per !== per) {
            return this.barWidth = null;
        }
        if (per > 100) {
            per = 100;
        }
        this.barWidth = per + "%";
    };
    ProgressComponent.prototype.calcBarClass = function () {
        var classArr = [];
        if (this.type) {
            classArr.push("progress-bar-" + this.type);
        }
        if (this.size) {
            classArr.push("progress-" + this.size);
        }
        if (this.align) {
            classArr.push(this.align);
        }
        if (this.vertical) {
            classArr.push('vertical');
        }
        if (this.striped) {
            classArr.push('progress-striped');
        }
        if (this.active) {
            classArr.push('active');
        }
        if (this.class) {
            classArr.push(this.class);
        }
        this.barClass = classArr.join(' ');
    };
    ProgressComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-progress',
                    templateUrl: 'progress.component.html'
                },] },
    ];
    /** @nocollapse */
    ProgressComponent.ctorParameters = function () { return []; };
    ProgressComponent.propDecorators = {
        'align': [{ type: core_1.Input },],
        'vertical': [{ type: core_1.Input },],
        'striped': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'maxValue': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'class': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'bgColorClass': [{ type: core_1.Input },],
    };
    return ProgressComponent;
}());
exports.ProgressComponent = ProgressComponent;
//# sourceMappingURL=progress.component.js.map
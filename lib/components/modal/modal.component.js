"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var defaults = {
    backdrop: 'static',
    show: false,
    keyboard: false
};
var ModalComponent = /** @class */ (function () {
    function ModalComponent(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.isShown = false;
        this.hasCustomHeader = false;
        this.hasCustomFooter = false;
        this.dragInit = false;
        this.dragObj = {
            isDragging: false,
            pageX: 0,
            pageY: 0,
            elLeft: 0,
            elTop: 0
        };
        this.onHeaderMouseDown = function (evt) {
            var styleObj = window.getComputedStyle(_this.modalDialog);
            _this.dragObj = {
                isDragging: true,
                pageX: evt.pageX,
                pageY: evt.pageY,
                elLeft: parseInt(styleObj.left, 10),
                elTop: parseInt(styleObj.top, 10)
            };
        };
        this.onDocumentMouseMove = function (evt) {
            if (_this.dragObj.isDragging) {
                if (evt.buttons !== 1) {
                    _this.dragObj.isDragging = false;
                    return;
                }
                var nextLeft = _this.dragObj.elLeft + evt.pageX - _this.dragObj.pageX;
                var nextTop = _this.dragObj.elTop + evt.pageY - _this.dragObj.pageY;
                nextLeft = Math.max(0, nextLeft);
                nextLeft = Math.min(window.innerWidth - _this.modalDialog.clientWidth, nextLeft);
                nextTop = Math.max(0, nextTop);
                nextTop = Math.min(window.innerHeight - _this.modalDialog.clientHeight, nextTop);
                _this.modalDialog.style.left = nextLeft + "px";
                _this.modalDialog.style.top = nextTop + "px";
            }
        };
        this.onDocumentMouseUp = function (evt) {
            _this.dragObj.isDragging = false;
        };
        this.animate = 'fade';
        this.okText = 'Save changes';
        this.cancelText = 'Close';
        this.allowDrag = false;
        this.onShown = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
        this.onOk = new core_1.EventEmitter();
        this.shownChange = new core_1.EventEmitter();
    }
    Object.defineProperty(ModalComponent.prototype, "modalSize", {
        get: function () {
            return (this.size || '').indexOf('modal') === -1 ? "modal-" + this.size : this.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "shown", {
        set: function (val) {
            this.isShown = val;
            this.shownChange.emit(this.isShown);
            if (!this.$modal) {
                return;
            }
            this.isShown ? this.showModal() : this.hideModal();
        },
        enumerable: true,
        configurable: true
    });
    ModalComponent.prototype.ngOnInit = function () {
        this.$el = this.elementRef.nativeElement;
        this.$modal = window['jQuery'](this.$el.querySelector('.modal'));
        this.modalDialog = this.$el.querySelector('.modal-dialog');
        this.hasCustomHeader = !!this.modalHeader.nativeElement.querySelector('[slot=modal-header]');
        this.hasCustomFooter = !!this.modalFooter.nativeElement.querySelector('[slot=modal-footer]');
    };
    ModalComponent.prototype.ngOnChanges = function (changesObj) {
        if (changesObj.allowDrag) {
            this.initDrag();
        }
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
        this.configModalOptions();
        this.configModalEvents();
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        var header = this.modalDialog.querySelector('.modal-header');
        header.removeEventListener('mousedown', this.onHeaderMouseDown);
        document.removeEventListener('mousemove', this.onDocumentMouseMove);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
    };
    ModalComponent.prototype.configModalOptions = function () {
        var opt = Object.assign({}, defaults, this.options);
        this.$modal.modal(opt);
    };
    ModalComponent.prototype.configModalEvents = function () {
        var _this = this;
        this.$modal.on('hidden.bs.modal', function (e) {
            _this.shownChange.emit(false);
            _this.onHidden.emit(e);
        });
        this.$modal.on('shown.bs.modal', function (e) {
            _this.shownChange.emit(true);
            _this.onShown.emit(e);
        });
    };
    ModalComponent.prototype.initDrag = function () {
        if (this.dragInit) {
            return;
        }
        var header = this.elementRef.nativeElement.querySelector('.modal-header');
        if (this.allowDrag) {
            header.addEventListener('mousedown', this.onHeaderMouseDown, false);
            document.addEventListener('mousemove', this.onDocumentMouseMove, false);
            document.addEventListener('mouseup', this.onDocumentMouseUp, false);
        }
        this.dragInit = true;
    };
    ModalComponent.prototype.showModal = function () {
        if (this.allowDrag) {
            this.initModalPosition();
        }
        var opt = Object.assign({}, defaults, this.options);
        this.$modal.modal(opt).modal('show');
    };
    ModalComponent.prototype.hideModal = function () {
        this.$modal.modal('hide');
    };
    ModalComponent.prototype.onCancelClick = function () {
        this.onCancel.emit();
        this.hideModal();
    };
    ModalComponent.prototype.onOkClick = function () {
        this.onOk.emit();
    };
    ModalComponent.prototype.initModalPosition = function () {
        var _this = this;
        this.modalDialog.style.top = '-1000px';
        setTimeout(function () {
            _this.modalDialog.style.top = '30px';
            _this.modalDialog.style.left = (window.innerWidth - _this.modalDialog.clientWidth) / 2 + "px";
        }, 300);
    };
    ModalComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sa-modal',
                    templateUrl: 'modal.component.html'
                },] },
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    ModalComponent.propDecorators = {
        'size': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'header': [{ type: core_1.Input },],
        'animate': [{ type: core_1.Input },],
        'okText': [{ type: core_1.Input },],
        'cancelText': [{ type: core_1.Input },],
        'allowDrag': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'onShown': [{ type: core_1.Output },],
        'onHidden': [{ type: core_1.Output },],
        'onCancel': [{ type: core_1.Output },],
        'onOk': [{ type: core_1.Output },],
        'shown': [{ type: core_1.Input },],
        'shownChange': [{ type: core_1.Output },],
        'modalHeader': [{ type: core_1.ViewChild, args: ['modalHeader',] },],
        'modalFooter': [{ type: core_1.ViewChild, args: ['modalFooter',] },],
    };
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map
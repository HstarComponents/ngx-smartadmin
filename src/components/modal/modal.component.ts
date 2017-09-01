import {
  Component, OnInit, Input, Output, ElementRef, OnChanges, AfterViewInit, OnDestroy,
  EventEmitter, ViewChild, SimpleChanges
} from '@angular/core';
import './modal.component.styl';

const defaults = {
  backdrop: 'static',
  show: false,
  keyboard: false
};

@Component({
  selector: 'sa-modal',
  templateUrl: 'modal.component.html'
})
export class ModalComponent implements OnInit, AfterViewInit {

  private $modal: any;
  private $el: any;
  private modalDialog: any;
  private isShown: boolean = false;
  private hasCustomHeader: boolean = false;
  private hasCustomFooter: boolean = false;
  private dragInit = false;
  private dragObj = {
    isDragging: false,
    pageX: 0,
    pageY: 0,
    elLeft: 0,
    elTop: 0
  };

  private onHeaderMouseDown = (evt: MouseEvent) => {
    let styleObj = window.getComputedStyle(this.modalDialog);
    document.body.style.userSelect = 'none';
    this.dragObj = {
      isDragging: true,
      pageX: evt.pageX,
      pageY: evt.pageY,
      elLeft: parseInt(styleObj.left, 10),
      elTop: parseInt(styleObj.top, 10)
    }
  };
  private onDocumentMouseMove = (evt: MouseEvent) => {
    if (this.dragObj.isDragging) {
      if (evt.buttons !== 1) {
        this.dragObj.isDragging = false;
        document.body.style.userSelect = 'unset';
        return;
      }
      let nextLeft = this.dragObj.elLeft + evt.pageX - this.dragObj.pageX;
      let nextTop = this.dragObj.elTop + evt.pageY - this.dragObj.pageY;
      nextLeft = Math.max(0, nextLeft);
      nextLeft = Math.min(window.innerWidth - this.modalDialog.clientWidth, nextLeft);
      nextTop = Math.max(0, nextTop);
      nextTop = Math.min(window.innerHeight - this.modalDialog.clientHeight, nextTop);
      this.modalDialog.style.left = `${nextLeft}px`;
      this.modalDialog.style.top = `${nextTop}px`;
    }
  };
  private onDocumentMouseUp = (evt: MouseEvent) => {
    document.body.style.userSelect = 'unset';
    this.dragObj.isDragging = false;
  };

  public get modalSize() {
    return (this.size || '').indexOf('modal') === -1 ? `modal-${this.size}` : this.size;
  }

  @Input()
  private size: string;

  @Input()
  private width: number;

  @Input()
  private header: string;

  @Input()
  private animate: string = 'fade';

  @Input()
  private okText: string = 'Save changes';

  @Input()
  private cancelText: string = 'Close';

  @Input()
  private draggable: boolean = false;

  @Input()
  private options: { backdrop?: boolean | string, show?: boolean, keyboard?: boolean };

  @Output()
  private onShown: EventEmitter<any> = new EventEmitter();

  @Output()
  private onHidden: EventEmitter<any> = new EventEmitter();

  @Output()
  private cancel: EventEmitter<any> = new EventEmitter();

  @Output()
  private ok: EventEmitter<any> = new EventEmitter();

  @Input()
  private set shown(val: boolean) {
    this.isShown = val;
    this.shownChange.emit(this.isShown);
    if (!this.$modal) {
      return;
    }
    this.isShown ? this.showModal() : this.hideModal();
  }

  @Output()
  private shownChange = new EventEmitter();

  @ViewChild('modalHeader')
  private modalHeader: any;

  @ViewChild('modalFooter')
  private modalFooter: any;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.$el = this.elementRef.nativeElement;
    this.$modal = window['jQuery'](this.$el.querySelector('.modal'));
    this.modalDialog = this.$el.querySelector('.modal-dialog');
    this.hasCustomHeader = !!this.modalHeader.nativeElement.querySelector('[slot=modal-header]');
    this.hasCustomFooter = !!this.modalFooter.nativeElement.querySelector('[slot=modal-footer]');
  }

  ngOnChanges(changesObj: SimpleChanges) {
    if (changesObj.draggable) {
      this.initDrag();
    }
  }

  ngAfterViewInit() {
    this.configModalOptions();
    this.configModalEvents();
  }

  ngOnDestroy() {
    let header = this.modalDialog.querySelector('.modal-header');
    header.removeEventListener('mousedown', this.onHeaderMouseDown);
    document.removeEventListener('mousemove', this.onDocumentMouseMove);
    document.removeEventListener('mouseup', this.onDocumentMouseUp);
  }

  private configModalOptions() {
    let opt = Object.assign({}, defaults, this.options);
    this.$modal.modal(opt);
  }

  private configModalEvents() {
    this.$modal.on('hidden.bs.modal', (e: Event) => {
      this.shownChange.emit(false);
      this.onHidden.emit(e);
    });
    this.$modal.on('shown.bs.modal', (e: Event) => {
      this.shownChange.emit(true);
      this.onShown.emit(e);
    });
  }

  private initDrag() {
    if (this.dragInit) {
      return;
    }
    let header = this.elementRef.nativeElement.querySelector('.modal-header');
    if (this.draggable) { // 初始化Drag
      header.addEventListener('mousedown', this.onHeaderMouseDown, false);
      document.addEventListener('mousemove', this.onDocumentMouseMove, false);
      document.addEventListener('mouseup', this.onDocumentMouseUp, false);
    }
    this.dragInit = true;
  }

  showModal() {
    if (this.draggable) {
      this.initModalPosition();
    }
    let opt = Object.assign({}, defaults, this.options);
    this.$modal.modal(opt).modal('show');
  }

  hideModal() {
    this.$modal.modal('hide');
  }

  onCancelClick() {
    this.cancel.emit();
    this.hideModal();
  }

  onOkClick() {
    this.ok.emit();
  }

  private initModalPosition() {
    this.modalDialog.style.top = '-1000px';
    setTimeout(() => {
      this.modalDialog.style.top = '30px';
      this.modalDialog.style.left = `${(window.innerWidth - this.modalDialog.clientWidth) / 2}px`;
    }, 300);
  }
}

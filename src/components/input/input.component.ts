import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'sa-input',
  templateUrl: 'input.component.html',
  providers: [INPUT_VALUE_ACCESSOR]
})

export class InputComponent implements OnInit, ControlValueAccessor {

  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;
  public innerValue: any;

  @Input()
  public type: string = 'text';

  public get isTextarea() {
    return this.type === 'textarea';
  }

  @Input()
  public placeholder: string;

  @Input()
  public rows: number = 3;

  @Input()
  public disabled: boolean = false;

  @Input()
  public icon: string;

  @Input()
  public iconPosition: string = 'left';

  public get iconClass() {
    return this.iconPosition === 'left' ? 'icon-prepend' : 'icon-append';
  }

  @Input()
  public tooltip: string;

  @Input()
  public tooltipPosition: string = 'top-left';

  @Output()
  public onIconClick: EventEmitter<MouseEvent> = new EventEmitter();

  public get tooltipPositionClass() {
    return `tooltip-${this.tooltipPosition}`;
  }

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'smart-form');
  }

  public handleIconClick(evt: MouseEvent) {
    this.onIconClick.emit(evt);
  }

  // 处理内容变化
  public handleModelChange(evt: any) {
    this.onChange(evt);
  }

  writeValue(obj: any): void {
    this.innerValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

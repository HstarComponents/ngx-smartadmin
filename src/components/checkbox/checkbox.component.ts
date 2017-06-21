import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'sa-checkbox',
  templateUrl: 'checkbox.component.html'
})

export class CheckboxComponent implements OnInit {

  @Input()
  private value: any;

  @Input()
  public disabled: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'smart-form');
  }
}

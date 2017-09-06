import { Component, OnInit, Input, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import './widget.component.styl';

@Component({
  selector: 'sa-widget',
  templateUrl: 'widget.component.html'
})

export class WidgetComponent implements OnInit {

  private allowColors = [
    'green', 'greenDark', 'greenLight',
    'purple', 'magenta', 'pink',
    'pinkDark', 'blueLight', 'teal',
    'blue', 'blueDark', 'darken',
    'yellow', 'orange', 'orangeDark',
    'red', 'redLight', 'white'
  ];
  public widgetColorClass: string = '';
  public fullScreenMode: boolean = false;
  public widgetCollapsed: boolean = false;
  public hasCustomHeader: boolean = false;
  public hasCustomToolbar: boolean = false;

  @Input()
  public header: string;

  @Input()
  public icon: string;

  @Input()
  public showCollapseBtn: boolean = true;

  @Input()
  public showFullscreenBtn: boolean = false;

  @Input()
  public showPickColorBtn: boolean = false;

  @Input()
  public defaultColor: string = '';

  @ViewChild('customHeader')
  public customHeader: any;

  @ViewChild('toolbar')
  public customToolbar: any;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.hasCustomHeader = !!this.customHeader.nativeElement.querySelector('[slot=header]');
    this.hasCustomToolbar = !!this.customToolbar.nativeElement.querySelector('[slot=toolbar]');
    this.widgetColorClass = `jarviswidget-color-${this.defaultColor}`;
  }

  ngOnChanges(changesObj: SimpleChanges) {
    if (changesObj.defaultColor) {
      this.changeWidgetColor(this.defaultColor);
    }
  }

  public changeWidgetColor(color: string) {
    if (!color) {
      return this.widgetColorClass = '';
    }
    this.widgetColorClass = `jarviswidget-color-${color}`;
  }

  public toggleFullScreen() {
    this.fullScreenMode = !this.fullScreenMode;
  }

  public toggleCollapse() {
    this.widgetCollapsed = !this.widgetCollapsed;
  }
}

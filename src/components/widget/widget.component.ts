import { Component, OnInit, Input, ElementRef, ViewChild, SimpleChanges } from '@angular/core';

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
  private widgetColorClass: string = '';
  private fullScreenMode: boolean = false;
  private widgetCollapsed: boolean = false;
  private hasCustomHeader: boolean = false;
  private hasCustomToolbar: boolean = false;

  @Input()
  private header: string;

  @Input()
  private icon: string;

  @Input()
  private showCollapseBtn: boolean = true;

  @Input()
  private showFullscreenBtn: boolean = false;

  @Input()
  private showPickColorBtn: boolean = false;

  @Input()
  private defaultColor: string = '';

  @ViewChild('customHeader')
  private customHeader: any;

  @ViewChild('toolbar')
  private customToolbar: any;

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

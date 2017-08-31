import { Component, OnInit, Input, AfterViewInit, SimpleChanges, OnChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'markdown-box',
  templateUrl: 'markdown-box.component.html'
})

export class MarkdownBoxComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  public markdown: string;

  @Input()
  public options: any = {};

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() { }

  ngAfterViewInit() {
    this._setMarkedOptions();
    this._renderMarkdown();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.markdown) {
      this._renderMarkdown();
    }
    if (changes.options) {
      this._setMarkedOptions();
    }
  }

  private _renderMarkdown() {
    let marked = window['marked'];
    if (!marked) {
      return console.error('markdown-box component depend marked(https://github.com/chjj/marked).');
    }
    let htmlCode = marked(this.markdown);
    htmlCode = htmlCode.replace(/<table>/g, '<table class="table table-bordered">');
    this.elementRef.nativeElement.innerHTML = htmlCode;
  }

  private _setMarkedOptions() {
    let marked = window['marked'];
    if (marked) {
      marked.setOptions(this.options);
    }
  }
}

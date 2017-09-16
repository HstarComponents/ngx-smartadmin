import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sa-carousel-item',
  templateUrl: 'carousel-item.component.html'
})

export class CarouselItemComponent implements OnInit {

  public active = false; // 是否激活
  public isFirstItem = false; // 第一个Item
  public rootDiv: any;

  @Input()
  public imgUrl: string = '';

  constructor(public elementRef: ElementRef) {

  }

  ngOnInit() {
    this.rootDiv = this.elementRef.nativeElement.querySelector('div');
  }
}

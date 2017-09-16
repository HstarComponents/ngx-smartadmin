import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-demo',
  templateUrl: 'carousel-demo.component.html'
})

export class CarouselDemoComponent implements OnInit {

  ngOnInit() { }

  public handleSlideChange(curIdx: number) {
    console.log('切换为', curIdx);
  }
}

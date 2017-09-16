import './image-zoom.component.styl';

import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sa-image-zoom',
  templateUrl: 'image-zoom.component.html'
})

export class ImageZoomComponent implements OnInit {

  public fullscreen: boolean = false;
  public zoomImageUrl: string = '';

  @HostListener('click', ['$event'])
  public onClick(evt: MouseEvent) {
    let target = evt.target as HTMLElement;
    if (target.tagName === 'IMG') {
      this.fullscreen = !this.fullscreen;
      if (this.fullscreen) {
        this.zoomImageUrl = target.getAttribute('src');
        this.change.emit(true);
      } else {
        this.zoomImageUrl = '';
        this.change.emit(false);
      }
    }
  }

  @Output()
  public change: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() { }
}

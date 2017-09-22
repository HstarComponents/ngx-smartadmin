import './MessageBox.styl';

import * as icons from './icon-images';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Component } from '@angular/core';
import { slideAnimation } from '../../animation';

@Component({
  selector: 'sa-message-box',
  template: `
    <div [class]="'sa-message ' + customClass"
      style="display: none;"
      [ngStyle]="{ 'z-index': zIndex }"
      (mouseenter)="clearTimer()" (mouseleave)="startTimer()"
      [@slideAnimation]="showBox">
      <img class="sa-message__img" [src]="makeLink()" *ngIf="!iconClass">
      <div class="sa-message__group" [ngClass]="{'is-with-icon': !!iconClass}">
        <p><i class="sa-message__icon" [class]="iconClass" *ngIf="iconClass"></i>{{ message }}</p>
        <div *ngIf="showClose" class="sa-message__closeBtn fa fa-close" (click)="close()"></div>
      </div>
    </div>
  `,
  animations: [slideAnimation]
})
export class MessageBoxComponent {

  // element id, for destroy com
  id: string;

  showClose: boolean = false;
  type: string = 'info';
  duration: number = 3000;
  // user setting
  iconClass: string = '';
  customClass: string = '';
  zIndex: number = 1000;

  message: string = '';
  showBox: boolean = false;
  timer: any;

  onClose: Function = () => { };
  onDestroy: Function = () => { };

  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }

  makeLink(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(icons[this.type])
  }

  show(message: string): void {
    this.message = message;
    this.showBox = true;
    this.timer = setTimeout(() => {
      this.close();
    }, this.duration);
  }

  close(): void {
    this.timer && clearTimeout(this.timer);
    this.showBox = false;
    this.onClose();
    this.onDestroy();
  }

  startTimer(): void {
    if (!this.showBox) return;
    this.timer = setTimeout(() => {
      this.close();
    }, this.duration);
  }

  clearTimer(): void {
    this.timer && clearTimeout(this.timer);
  }

}

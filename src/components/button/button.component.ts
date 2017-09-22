import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sa-button',
  templateUrl: 'button.component.html'
})

export class ButtonComponent implements OnInit {

  @Input()
  public type: string = '';

  @Input()
  public size: string = '';

  @Input()
  public icon: string = '';

  @Input()
  public circle: boolean = false;

  public get btnClass() {
    let classArr = [];
    this.type && (classArr.push(`btn-${this.type}`));
    this.size && (classArr.push(`btn-${this.size}`));
    this.circle && (classArr.push('btn-circle'));
    return classArr.join(' ');
  }

  ngOnInit() { }
}

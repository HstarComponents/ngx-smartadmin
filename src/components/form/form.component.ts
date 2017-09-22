import './form.component.styl';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sa-form',
  templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit {

  @Input()
  public inline: boolean = false;

  @Input()
  public labelWidth: string = '';

  @Input()
  public labelPosition: string = 'right';

  ngOnInit() { }
}

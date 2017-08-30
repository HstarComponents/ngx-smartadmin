import { Directive, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[saTableCellTemplate]'
})
export class TableCellDirective implements OnInit {
  constructor(public template: TemplateRef<any>) {

  }
  ngOnInit() {

  }
}

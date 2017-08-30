import { Directive, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { TableCellDirective } from './column-cell.directive';

@Directive({
  selector: 'sa-table-column'
})
export class TableColumnDirective implements OnInit {

  private get styleWidth() {
    return this.width === 'auto' ? 'auto' : `${this.width}px`;
  }

  public sort: string = '';

  @Input()
  private header: string = '';

  @Input()
  private field: string;

  @Input()
  private width: number | string = 'auto';

  @Input()
  private sortable: boolean = false;

  @Input()
  @ContentChild(TableCellDirective, { read: TemplateRef })
  cellTemplate: TemplateRef<any>;

  ngOnInit() { }
}

import { OnInit, TemplateRef } from '@angular/core';
export declare class TableColumnDirective implements OnInit {
    private readonly styleWidth;
    sort: string;
    private header;
    private field;
    private width;
    private sortable;
    cellTemplate: TemplateRef<any>;
    ngOnInit(): void;
}

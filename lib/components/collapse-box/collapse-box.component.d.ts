import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class CollapseBoxComponent implements OnInit, OnChanges {
    innerCollapsed: boolean;
    header: string;
    collapsed: boolean;
    collapsedChange: EventEmitter<boolean>;
    ngOnInit(): void;
    ngOnChanges(changesObj: SimpleChanges): void;
    onHeaderClick(): void;
}

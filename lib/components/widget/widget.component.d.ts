import { OnInit, ElementRef, SimpleChanges } from '@angular/core';
export declare class WidgetComponent implements OnInit {
    private elementRef;
    private allowColors;
    private widgetColorClass;
    private fullScreenMode;
    private widgetCollapsed;
    private hasCustomHeader;
    private hasCustomToolbar;
    private header;
    private icon;
    private showCollapseBtn;
    private showFullscreenBtn;
    private showPickColorBtn;
    private defaultColor;
    private customHeader;
    private customToolbar;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changesObj: SimpleChanges): void;
    changeWidgetColor(color: string): string;
    toggleFullScreen(): void;
    toggleCollapse(): void;
}

import { OnInit, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { TabsetComponent } from './tabset.component';
export declare class TabItemComponent implements OnInit, AfterViewInit {
    private elementRef;
    private renderer;
    private tabset;
    private _active;
    active: boolean;
    header: string;
    icon: string;
    constructor(elementRef: ElementRef, renderer: Renderer, tabset: TabsetComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}

import { OnInit, AfterViewInit } from '@angular/core';
import { AccordionComponent } from './accordion.component';
export declare class AccordionItemComponent implements OnInit, AfterViewInit {
    accordion: AccordionComponent;
    private accordionItemId;
    private header;
    private active;
    constructor(accordion: AccordionComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    changeActiveStatus(): void;
}

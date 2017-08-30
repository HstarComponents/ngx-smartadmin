import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class AlertComponent implements OnInit, OnChanges {
    private innerClass;
    private shown;
    private shownChange;
    private showCloseBtn;
    private type;
    private onClose;
    ngOnInit(): void;
    ngOnChanges(changesObj: SimpleChanges): void;
    btnCloseClick(): void;
    private setInnerClass();
}

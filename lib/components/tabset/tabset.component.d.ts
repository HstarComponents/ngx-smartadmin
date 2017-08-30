import { OnInit, AfterViewInit } from '@angular/core';
import { TabItemComponent } from './tab-item.component';
export declare class TabsetComponent implements OnInit, AfterViewInit {
    _selectIndex: number;
    tabItems: TabItemComponent[];
    private selectIndex;
    private selectIndexChange;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setActiveItem(tabItem: TabItemComponent | number): void;
}

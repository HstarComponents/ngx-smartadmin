import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagination-demo',
  templateUrl: 'pagination-demo.component.html'
})

export class PaginationDemoComponent implements OnInit {

  public pageObj = {
    totalCount: 1024,
    pageSize: 20
  };
  public pageIndex = 1;

  ngOnInit() { }

  public onPageChanged(pageIndex: number) {
    console.log('页码变更，当前页：', pageIndex);
  }
}

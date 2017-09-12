import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-demo',
  templateUrl: 'table-demo.component.html'
})

export class TableDemoComponent implements OnInit {

  public dataList: any[] = [];
  public dataSource: any[] = [];
  public pageSize: number = 10;
  public pageIndex = 1;
  public totalCount = Math.floor(Math.random() * 50);

  ngOnInit() {
    this.dataList = (() => {
      let result = [];
      for (let i = 0; i < this.totalCount; i++) {
        result.push({
          name: 'Name' + i, //Math.floor(Math.random() * 1000),
          age: Math.floor(20 + Math.random() * 50)
        });
      }
      return result;
    })();
    this.dataSource = this.getDataSource(1);
  }

  public onSorting(sortOpt: any) {
    this.dataList.sort(this._getSortFn(sortOpt));
  }

  public onSorting2(sortOpt:any){
    this.dataSource.sort(this._getSortFn(sortOpt));
  }

  private _getSortFn(sortOpt: any) {
    let sortFn;
    switch (sortOpt.field) {
      case 'age':
        sortFn = (a1: any, a2: any) => {
          let v = a1.age - a2.age;
          return sortOpt.sort === 'asc' ? v : -v;
        };
        break;
      case 'name':
        sortFn = (a1: any, a2: any) => {
          if (a1.name === a2.name) {
            return 0;
          }
          let v = a1.name > a2.name ? 1 : -1;
          return sortOpt.sort === 'asc' ? v : -v;
        }
        break;
    }
    return sortFn;
  }

  public onPaging(pagingOpt: any) {
    console.log('paging', pagingOpt);
    this.dataSource = this.getDataSource(pagingOpt.pageIndex);
  }

  public onPageSizeChanged(pageSize: number) {
    console.log('pageSizeChange', pageSize);
    this.pageSize = pageSize;
  }

  private getDataSource(pageIndex: number) {
    let startIdx = this.pageSize * (pageIndex - 1);
    let endIdx = Math.min(this.totalCount, startIdx + this.pageSize);
    let result = [];
    for (let i = startIdx; i < endIdx; i++) {
      result.push(this.dataList[i]);
    }
    return result;
  }
}

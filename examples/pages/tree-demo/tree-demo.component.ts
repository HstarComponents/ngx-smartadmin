import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tree-demo',
  templateUrl: 'tree-demo.component.html'
})

export class TreeDemoComponent implements OnInit {

  public treeData: any[] = [{
    text: '一级节点1',
    value: 'node1'
  }, {
    text: '一级节点2',
    value: 'node2',
    children: [
      { text: '二级节点1', value: 'node2-1' },
      { text: '二级节点2', value: 'node2-2' },
      { text: '二级节点3', value: 'node2-3' }
    ]
  }];

  ngOnInit() { }
}

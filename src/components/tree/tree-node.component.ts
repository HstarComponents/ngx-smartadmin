import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sa-tree-node',
  templateUrl: 'tree-node.component.html'
})

export class TreeNodeComponent implements OnInit, OnChanges {

  public expanded: boolean = false;

  public get isLeaf() {
    return !this.treeNode || !this.treeNode.children || this.treeNode.children.length === 0;
  }

  @Input()
  public treeNode: any;

  @Input()
  public showCheckbox = false;

  @Input()
  public level: number;

  public get nodeClass() {
    return `level-${this.level}`;
  }

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.treeNode) {
      // Object.assign(this.treeNodeData, this.treeNode);
    }
  }

  public handleNodeClick() {
    this.expanded = !this.expanded;
  }
}

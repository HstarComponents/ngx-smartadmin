import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-demo',
  templateUrl: 'modal-demo.component.html'
})

export class ModalDemoComponent implements OnInit {

  public modalShown: boolean = false;

  ngOnInit() { }

  public showModal(key: string) {
    this[key] = true;
  }

  public onOkBtnClick() {
    alert('您点击了OK OR 自定义按钮');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-demo',
  templateUrl: 'modal-demo.component.html'
})

export class ModalDemoComponent implements OnInit {

  public modalShown: boolean = false;
  public modal2Shown: boolean = false;
  public modal3Shown: boolean = false;
  public modal4Shown: boolean = false;
  public modal5Shown: boolean = false;
  public modal6Shown: boolean = false;

  ngOnInit() { }

  public showModal(key: string) {
    this[key] = true;
  }

  public onOkBtnClick() {
    alert('您点击了OK OR 自定义按钮');
  }
}

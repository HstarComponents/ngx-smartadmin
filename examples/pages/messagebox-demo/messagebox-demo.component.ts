import { Component, OnInit } from '@angular/core';

import { MessageBox } from '../../../src';

@Component({
  selector: 'messagebox-demo',
  templateUrl: 'messagebox-demo.component.html'
})

export class MessageboxDemoComponent implements OnInit {

  constructor(private messageBox: MessageBox) {
    console.log('abc');
  }

  ngOnInit() { }

  public showMessage() {
    this.messageBox.success('Hello', { duration: 1000 });
  }

  public showMessage2() {
    this.messageBox.error('Hello', { showClose: true, duration: 100000 });
  }

  public showMessage3() {
    this.messageBox.warning('Hello', {
      onClose: () => {
        alert('Bye-bye');
      }
    });
  }
}

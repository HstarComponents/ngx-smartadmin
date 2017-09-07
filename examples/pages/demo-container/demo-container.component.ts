import './demo-container.component.styl';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Http } from '@angular/http';

@Component({
  selector: 'demo-container',
  templateUrl: 'demo-container.component.html'
})

export class DemoContainerComponent implements OnInit {

  public componentDocument: string = '';

  constructor(private router: Router, private http: Http) {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this._loadComponentDocument();
      }
    });
  }

  ngOnInit() { }

  private _loadComponentDocument() {
    let componentName = this.router.url.split('/').pop();
    if (!componentName) {
      return;
    }
    this.http.get(`${AppConf.rootHost}/src/components/${componentName}/README.md`)
      .subscribe(res => {
        this.componentDocument = res.text();
      });
  }
}

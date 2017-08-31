import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import './app.component.styl';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  public menuData: Array<MenuItem> = [];
  public isFullScreen: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.menuData = AppConf.menuData;
  }

  public navigateTo(url: string) {
    this.router.navigate([url]);
  }

  public launchFullscreen() {
    let currentIsFullScreen = this._isFullScreen();
    currentIsFullScreen ? this._exitFullScreen() : this._requestFullScreen();
    this.isFullScreen = !currentIsFullScreen;
  }

  private _isFullScreen() {
    return !!document.webkitFullscreenElement || document.webkitIsFullScreen;
  }

  private _exitFullScreen() {
    if (document.exitFullscreen) {
      return document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      return document.webkitCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      return document.webkitExitFullscreen();
    }
  }

  private _requestFullScreen() {
    let root = document.documentElement;
    if (root.requestFullscreen) {
      return root.requestFullscreen();
    } else if (root.webkitRequestFullScreen) {
      return root.webkitRequestFullScreen();
    } else if (root.webkitRequestFullscreen) {
      return root.webkitRequestFullscreen();
    }
  }

  public onMenuItemClick(evt: MouseEvent, menu: MenuItem) {
    evt && (evt.stopPropagation(), evt.preventDefault());
    if (!menu.subMenu || menu.subMenu.length === 0) {
      // 叶子节点
      this.clearMenuActived(this.menuData);
      this.setMenuTreeActived(menu);
      this.router.navigate([menu.url]);
    } else {
      // 中间节点
      menu.open = !menu.open;
    }
  }

  private clearMenuActived(menus: Array<MenuItem>, parent: MenuItem = null) {
    menus.forEach(x => {
      x.parent = parent;
      x.active = false;
      if (x.subMenu && x.subMenu.length > 0) {
        this.clearMenuActived(x.subMenu, x);
      }
    })
  }

  private setMenuTreeActived(menu: MenuItem) {
    menu.active = true;
    if (menu.parent) {
      this.setMenuTreeActived(menu.parent);
    }
  }
}

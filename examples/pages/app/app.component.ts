import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import './app.component.styl';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  private currentSelectMenu: MenuItem;

  public menuData: Array<MenuItem> = [];
  public isFullScreen: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.menuData = AppConf.menuData.slice(0);
    this._processMenuData(this.menuData, null);
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this._setSelectedMenu();
      }
    });
  }

  public navigateTo(url: string) {
    this.router.navigate([url]);
  }

  public launchFullscreen() {
    let currentIsFullScreen = this._isFullScreen();
    currentIsFullScreen ? this._exitFullScreen() : this._requestFullScreen();
    this.isFullScreen = !currentIsFullScreen;
  }

  public onMenuItemClick(evt: MouseEvent, menu: MenuItem) {
    evt && (evt.stopPropagation(), evt.preventDefault());
    if (!menu.subMenu || menu.subMenu.length === 0) {
      // 叶子节点
      this.router.navigate([menu.url]);
    } else {
      // 中间节点
      menu.open = !menu.open;
    }
  }

  private _processMenuData(menus: Array<MenuItem>, parent: MenuItem) {
    menus.forEach(m => {
      m.parent = parent;
      if (m.subMenu && m.subMenu.length > 0) {
        this._processMenuData(m.subMenu, m);
      }
    });
  }

  private _setSelectedMenu() {
    let url = this.router.url;
    this._setMenuStatus(this.currentSelectMenu, false, false);
    let menu = this._getMenuByUrl(this.menuData, url);
    if (menu) {
      this.currentSelectMenu = menu;
      this._setMenuStatus(menu, true, false);
    }
  }

  private _setMenuStatus(menu: MenuItem, active: boolean, open: boolean) {
    if (!menu) {
      return;
    }
    menu.active = active;
    menu.open = open;
    if (menu.parent) {
      this._setMenuStatus(menu.parent, active, true);
    }
  }

  private _getMenuByUrl(menus: Array<MenuItem>, url: string): MenuItem | any {
    for (let m of menus) {
      if (m.subMenu && m.subMenu.length > 0) {
        let findMenu = this._getMenuByUrl(m.subMenu, url);
        if (findMenu) {
          return findMenu;
        }
      } else if (m.url === url) {
        return m;
      }
    }
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
}

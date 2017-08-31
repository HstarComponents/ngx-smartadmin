import { Component, OnInit } from '@angular/core';
import './app.component.styl';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  public menuData: Array<MenuItem> = [];

  ngOnInit() {
    this.menuData = AppConf.menuData;
  }

  public onMenuItemClick(evt: MouseEvent, menu: MenuItem) {
    evt && evt.stopPropagation();
    if (!menu.subMenu || menu.subMenu.length === 0) {
      // 叶子节点
      this.clearMenuActived(this.menuData);
      this.setMenuTreeActived(menu);
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

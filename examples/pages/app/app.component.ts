import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string,
  url?: string,
  icon?: string,
  subMenu?: Array<MenuItem>,
  active?: boolean,
  open?: boolean,
  parent?: MenuItem
};

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  public menuData: Array<MenuItem> = [
    {
      text: 'Tables', active: true, open: true, icon: 'fa-table', subMenu: [
        { text: 'Normal Tables', active: true, url: '/table' },
        { text: 'Data Tables', url: '/datatables' }
      ]
    },
    {
      text: 'Forms', icon: 'fa-pencil-square-o', subMenu: [
        { text: 'Smart Form Elements', url: '/form-elements' },
        { text: 'Smart Form Layouts', url: '/form-templates' },
      ]
    },
    {
      text: 'UI Elements', icon: 'fa-desktop', subMenu: [
        { text: 'General Elements', url: '/general-elements' },
        { text: 'Buttons', url: '/buttons' },
        { text: 'Tree View', url: '/treeview' }
      ]
    },
    {
      text: 'Widgets', icon: 'fa-list-alt', url: '/widgets'
    }
  ];

  ngOnInit() { }

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
    if(menu.parent){
      this.setMenuTreeActived(menu.parent);
    }
  }
}

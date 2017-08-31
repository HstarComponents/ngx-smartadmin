interface MenuItem {
  text: string,
  url?: string,
  icon?: string,
  subMenu?: Array<MenuItem>,
  active?: boolean,
  open?: boolean,
  parent?: MenuItem
}

declare var AppConf: {
  menuData: Array<MenuItem>
}

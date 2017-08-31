export const menuData: Array<MenuItem> = [
  {
    text: 'Tables', active: true, open: true, icon: 'fa-table', subMenu: [
      { text: 'Table', url: '/table' }
    ]
  },
  {
    text: 'Forms', icon: 'fa-pencil-square-o', subMenu: [
      { text: 'Check Box (Group)', url: '/check-box' },
      { text: 'Radio (Group)', url: '/radio' },
      { text: 'Rating', url: '/rating' },
      { text: 'Switch', url: '/switch' }
    ]
  },
  {
    text: 'UI Elements', icon: 'fa-desktop', subMenu: [
      { text: 'Accordion', url: '/accordion' },
      { text: 'Alert', url: '/alert' },
      { text: 'Collapse Box', url: '/collapse-box' },
      { text: 'Modal', url: '/modal' },
      { text: 'Pagination', url: '/pagination' },
      { text: 'Progress', url: '/progress' },
      { text: 'TabSet', url: '/tabset' },
      { text: 'Widget', url: '/widget' },
      { text: 'Wizard', url: '/wizard' }
    ]
  }
];

window['AppConf'] = {
  menuData,
  rootHost: process.env.NODE_ENV === 'production' ? 'https://github.com/HstarComponents/ngx-smartadmin/tree/master' : 'http://localhost:7777'
};

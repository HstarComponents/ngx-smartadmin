export const menuData: Array<MenuItem> = [
  {
    text: 'Layout', icon: 'fa-list', subMenu: [
      { text: 'Row', url: '/row' },
      { text: 'Col', url: '/col' }
    ]
  },
  {
    text: 'Datas', icon: 'fa-table', subMenu: [
      { text: 'Table', url: '/table' },
      { text: 'Tree', url: '/tree' }
    ]
  },
  {
    text: 'Forms', icon: 'fa-pencil-square-o', subMenu: [
      { text: 'Autocomplete', url: '/autocomplete' },
      { text: 'Check Box', url: '/checkbox' },
      { text: 'Check Box Group', url: '/checkbox-group' },
      { text: 'Date Picker', url: '/date-picker' },
      { text: 'Form', url: '/form' },
      { text: 'Input', url: '/input' },
      { text: 'Input Group', url: '/input-group' },
      { text: 'Radio', url: '/radio' },
      { text: 'Radio Group', url: '/radio-group' },
      { text: 'Rating', url: '/rating' },
      { text: 'Select', url: '/select' },
      { text: 'Switch', url: '/switch' },
      { text: 'Time Picker', url: '/time-picker' }
    ]
  },
  {
    text: 'UI Elements', icon: 'fa-desktop', subMenu: [
      { text: 'Accordion', url: '/accordion' },
      { text: 'Alert', url: '/alert' },
      { text: 'Button', url: '/button' },
      { text: 'Carousel', url: '/carousel' },
      { text: 'Collapse Box', url: '/collapse-box' },
      { text: 'Modal', url: '/modal' },
      { text: 'Image Zoom', url: '/image-zoom' },
      { text: 'Pagination', url: '/pagination' },
      { text: 'Progress', url: '/progress' },
      { text: 'TabSet', url: '/tabset' },
      { text: 'Widget', url: '/widget' },
      { text: 'Wizard', url: '/wizard' }
    ]
  }, {
    text: 'Services', icon: 'fa-star', subMenu: [
      { text: 'MessageBox', url: '/message-box' }
    ]
  }
];

window['AppConf'] = {
  menuData,
  serviceList: ['message-box'],
  rootHost: process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/HstarComponents/ngx-smartadmin/master' : 'http://localhost:7777'
};

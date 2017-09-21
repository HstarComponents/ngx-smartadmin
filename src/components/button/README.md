# sa-button

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| type | string | | '' | 按钮类型，可选 ['', 'default', 'primary', 'info', 'warning', 'danger'] |
| size | string | | '' | 按钮大小，可选 ['', 'xs', 'sm', 'lg', 'xl'] |
| icon | string | | '' | 按钮的图标样式（图标显示在左侧）|
| circle | boolean | | false | 是否是圆形按钮，默认false |

**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| '' | 按钮文字 |

**Events（Output）**

| Name | Paramters | Description |
| --- | --- | --- |
| click | MouseEvent | 按钮被点击时触发 |

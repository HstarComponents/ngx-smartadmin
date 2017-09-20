# sa-input

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| type | string | | 'input' | input标签的type，同时可选textarea |
| placeholder | string | | | 输入框的 `placeholder` |
| rows | number | | 3 | 文本域的rows，当 `type=== 'textarea'` 时有效 |
| disabled | boolean |  | false | | 是否禁用输入框 |
| icon | string | | | icon类名，如 `fa fa-star` | 
| iconPosition | string | | 'left' | 显示图标的位置，可选 ['left', 'right'] |
| tooltip | string | | | Tooltip文本 |
| tooltipPosition | string | | 'top-left' | Tooltip的位置，可选['top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right'] |
| ngModel | any | Y | | 双向绑定的value |

**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |


# sa-input-group

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| type | string | | 'input' | input标签的type，同时可选textarea |
| placeholder | string | | '' | 输入框的 `placeholder` |
| rows | number | | 3 | 文本域的rows，当 `type=== 'textarea'` 时有效 |
| disabled | boolean |  | false | 是否禁用输入框 |
| ngModel | any | Y | | 双向绑定的value |

**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| addon-prepend | 前置的附加元素 |
| btn-prepend | 前置的附加按钮 |
| addon-append | 后置的附加元素 |
| btn-append | 后置的附加按钮 |

# sa-checkbox-group

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| ngModel | any[] | Y | | 选中的值 |
| inline | boolean | | true | 是否inline显示（显示在一行） |
| disabled | boolean | | false | 是否被禁用 |

**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| '' | 	用于放置多个 `sa-checkbox` 选项 |

**Events（Output）**

| Name | Paramters | Description |
| --- | --- | --- |
| onValueChange | value: any[] | 值变化时触发 |

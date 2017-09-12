# sa-radio-group

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| ngModel | any | Y | | 当前选中的值 |
| inline | boolean | | true | 是否将选项显示在一行 |
| disabled | boolean | | false | 是否禁用 |
 
**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| '' | 用于放置多个 `sa-radio` 选项 |

**Events（Output）**

| Name | Paramters | Description |
| --- | --- | --- |
| onValueChange | value:string | radio-group的当前选中项 |

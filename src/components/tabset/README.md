# sa-tabset

## Input

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| selected | string | Y | | 当前选中的TabItem名字 |
 
## Slots（ng-content占位符）

| Name | Description |
| --- | --- |
| '' | 放置 `sa-tab-item` |

## Events（Output）

| Name | Paramters | Description |
| --- | --- | --- |

# sa-tab-item

## Input

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| name | string | | | 设置选项卡名称，不设置，则是 `tabpane-${index}` |
| header | string | | | 设置选项卡Header |
| icon | string | | | 设置选项卡Header Icon Class |

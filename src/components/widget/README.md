# sa-widget

## Input

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| header | string | | | 设置widget的标题 |
| icon | string | | | 设置widget的icon class，如（fs fs-star）|
| showCollapseBtn | boolean | | true | 是否显示收缩按钮 |
| showFullscreenBtn | boolean | | false | 是否显示全屏按钮 |
| showPickColorBtn | boolean | | false | 是否显示选择颜色按钮 |
| defaultColor | string | | '' | widget的默认header颜色，可选：[  'green', 'greenDark', 'greenLight',    'purple', 'magenta', 'pink',    'pinkDark', 'blueLight', 'teal',    'blue', 'blueDark', 'darken',    'yellow', 'orange', orangeDark',    'red', 'redLight', 'white'] |
 
## Slots（ng-content占位符）

| Name | Description |
| --- | --- |
| '' | 内容 |
| header | 自定义标题栏 |
| toolbar | 自定义工具栏 |

## Events（Output）

| Name | Paramters | Description |
| --- | --- | --- |

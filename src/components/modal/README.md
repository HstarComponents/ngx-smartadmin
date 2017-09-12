# sa-modal

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| size | string | | '' | 设置弹出层的大小，可选 ['sm', 'lg', ''] |
| width | number | | | 设置弹出层的宽度，设置后size属性将会失效 |
| header | string | | | 设置弹出层的标题 |
| animate | string | | 'fade' | 设置弹出层的动画效果 |
| okText | string | | 'Save changes' | 设置确认按钮的文本 |
| cancelText | string | | 'Close' | 设置取消按钮的文本 |
| draggable | boolean | | false | 是否允许弹出层可以拖拽 |
| shown | boolean | Y | false | 控制弹出层的显示隐藏 |
 
**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| '' | 放置内容 |
| modal-header | 自定义弹出层Header内容 |
| modal-footer | 自定义弹出层footer内容（设置后将无法触发ok和cancel事件） |

**Events（Output）**

| Name | Paramters | Description |
| --- | --- | --- |
| onShown | Event | 弹出层显示后触发 |
| onHidden | Event | 弹出层隐藏后触发 |
| onCancel |  | 点击取消按钮时触发（会关闭弹出层）|
| onOk | | 点击确认按钮时触发（不会关闭弹出层） |

# sa-alert

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| type | string | | 'info' | 设置alert类型，可选['info', 'warning', 'danger', 'success'] |
| alertClass | string | | '' | 设置Alert的class |
| shown | boolean | Y | true | 是否显示ALERT |
| closable | boolean | | true | 是否可关闭（显示关闭按钮） |

**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| '' | 设置Alert的主内容 |



**Events（Output）**

| Name | Paramters | Description |
| --- | --- | --- |
| onClose | boolean | Alert组件关闭后触发（点击关闭按钮会引起组件关闭） |

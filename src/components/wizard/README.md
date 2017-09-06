# sa-wizard

## Types

```
Setp: {
  value: string,
  title: string
}
```

## Input

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| type | string | | '' | Wizard类型，可选 ['', 'fuelux'] |
| steps | Array&lt;Step> | | [] | 步骤数据 |
| value | string | | '' | 选中的值 |
| prevText | string | | 'Prev' | 上一步按钮的文本（类型为fuelux时生效）|
| nextText | string | | 'Next' | 下一步按钮的文本（类型为fuelux时生效）|
 
## Slots（ng-content占位符）

| Name | Description |
| --- | --- |

## Events（Output）

| Name | Paramters | Description |
| --- | --- | --- |
| stepClick | Step | 步骤条被点击时触发 |

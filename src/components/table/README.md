# sa-table

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| source | Array<any> | | [] | 数据源（数组） |
| showPageSizeList | boolean | | true | 是否显示每页记录数下拉列表 |
| pageSizeList | Array<number> | | [10, 20, 50] | 要显示的每页记录数下拉列表 |
| pageSize | number | Y | 20 | 每页记录数 |
| totalCount | number | | 0 | 总记录数 |
| pageIndex | number | Y | 1 | 当前页码 |
| serverPaging | boolean | | false | 是否是服务端分页 |
| pageable | boolean | | false | 是否启用分页 |

**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| '' | 放置 `sa-table-column` |

**Events（Output）**

| Name | Paramters | Description |
| --- | --- | --- |
| onSorting | sortObj: {field:string, header: string, sort: string}(排序对象)  | 点击表头排序时触发 |
| onPaging | PagingObject: {pageIndex:number}(当前页码) | 点击分页时触发 |
| onRowClick | rowData: any（当前行的数据） | 行被点击时触发 |
| onPageSizeChange | pageSize: number(每页记录数) | 页码改变时触发 |

# sa-table-column

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| header | string | | '' | 列头 |
| field | string | | | 绑定的数据字段 |
| width | number|string | | 'auto' | 列宽度 |
| sortable | boolean | | false | 是否允许排序 |

**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| '' | 放置 `[saTableCellTemplate]` 自定义Cell |

# [saTableCellTemplate]


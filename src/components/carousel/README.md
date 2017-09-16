# sa-carousel

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| animateType | string |  | 'slide' | 动画类型，可选['slide', 'fade'] |
| autoplay | boolean | | true | 是否自动播放 |
| interval | number | | 3000 | 每次切换间隔时间，单位毫秒，默认3000 |
 
**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| '' | 装载 `sa-carousel-item` |

**Events（Output）**

| Name | Paramters | Description |
| --- | --- | --- |
| change | currentIndex: number | 切换后触发，并传入当前切换到第几张 |

# sa-carousel-item

**Input**

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| imgUrl | string |  | | 图片地址 |

 
**Slots（ng-content占位符）**

| Name | Description |
| --- | --- |
| '' | 设置Item的内容 |

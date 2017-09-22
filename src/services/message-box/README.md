# MessageBox

**Usage**

```js
import { MessageBox } from 'ngx-smartadmin';

@Component({...})
class XXXComponent {
  constructor(private messageBox: MessageBox){

  }
}

this.messageBox.success(msg:string, options?: Options);

// Call
this.messageBox.success('Hello', { duration: 5000 });
this.messageBox.error('Hello', { showClose: true });
this.messageBox.warning('Hello', {
  onClose: () => {
    alert('Bye-bye');
  }
});
```

**Options**

| Name | Data Type | Default Value | Description |
| --- | --- | --- | --- |
| showClose | boolean | false | 是否显示关闭按钮 |
| duration | number | 3000 | 自动关闭时间，请不要操作setTimeout时间的最大值 |
| zIndex | number | 1000 | 消息框的z-index |
| onClose | fn | | 关闭时的回调函数 |

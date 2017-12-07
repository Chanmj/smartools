# smartools

前端 js 工具库

## 安装使用

### npm

`$ npm i smartools --save-dev`

```js
import Tools from 'smartools'
```

## API

**参数说明：**
arrayEqual([arr1:Array], [arr2:Array]) ---- `arr1`：第一个参数 arr1(语义化便于理解)，`:Array`: arr1 参数类型为 Array。

### Array

- `arrayEqual([arr1], [arr2])`: 判断两个数组是否相等，返回 Boolean 值。

### Device

- `getExplore()`: 获取浏览器类型和版本
- `getOS()`: 获取操作系统类型

### Dom

- `getScrollTop()`: 获取滚动条距顶部的距离
- `offset([ele:Dom])`: 获取一个元素的距离文档(document)的位置，类似 jQ 中的 `offset()`，返回 `{left: number, top: number}`
- `scrollTo([to:Number], [duration:Number])`: 在 `${duration}` 时间内，滚动条平滑滚动到 `${to}` 指定位置
- `setScrollTop([value:Number])`: 设置滚动条距顶部的距离

### Function

- `throttle([delay:Number], [nonTrailing:Boolean], [callback:Function], [debounceMode:Boolean])`: **函数节流**适用于限制 `resize` 和 `scroll` 等函数的调用频率
- `debounce([delay:Number], [atBegin:Boolean], [callback:Function])`: **函数防抖**，与 throttle 不同的是，debounce 保证一个函数在多少毫秒内不再被触发，只会执行一次，要么在第一次调用 return 的防抖函数时执行，要么在延迟指定毫秒后调用

### Object

- `deepClone([values:Any])`: 深拷贝，支持常见类型
- `isEmptyObject(obj:Object)`: 判断 `obj` 是否为空

### Random

`randomNum([min:Number, max:Number])`: 生成指定范围的随机数

### RegExp

`isEmail([str:String])`: 判断是否为邮箱地址，返回 Boolean 值
`isIdCard([str:String|Number])`: 判断是否为身份证号，返回 Boolean 值
`isPassword([str:String])`: 判读密码(以字母开头，长度在 6~18 之间，只能包含字母、数字和下划线)
`isPhoneNum([str:String|Number])`: 判断是否为手机号
`isStrongPassword([str:String])`: 判断强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)
`isUrl([str:String])`: 判断是否为 URL 地址

### Time

`formatRemainTime([endtime:Date])`: 格式化现在距 ${endTime} 的剩余时间，返回格式 `n天 n小时 n分钟 n秒`
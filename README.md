### 介绍

JavaScript常用功能



### 安装

```
npm i the-shield-tools
```



### 使用

```
import {xxx} from 'the-shield-tools';
```



#### 数字操作

| 方法名    | 说明               | 参数                            | 返回值                 | 备注 |
| --------- | ------------------ | ------------------------------- | ---------------------- | ---- |
| randomNum | 生成随机数         | Function(min:number,max:number) | 区间内的随机整数       |      |
| format    | 把数字按千分位分割 | Function(n:number)              | 千分位分隔的数字字符串 |      |



#### 数组操作

| 方法名        | 说明             | 参数                | 返回值         | 备注 |
| ------------- | ---------------- | ------------------- | -------------- | ---- |
| arrScrambling | 打乱数组顺序     | Function(arr:Array) | 乱序后的数组   |      |
| flatten       | 数组扁平化       | Function(arr:Array) | 扁平化后的数组 |      |
| sample        | 数组中获取随机数 | Function(arr:Array) | 随机数         |      |



#### 字符串操作

| 方法名          | 说明                     | 参数                  | 返回值              | 备注                                       |
| --------------- | ------------------------ | --------------------- | ------------------- | ------------------------------------------ |
| maskName        | 姓名隐私操作             | Function(name:string) | 加*后的姓名         | 姓名加* 两字最后一个加星，三字以上保留首尾 |
| randomString    | 生成随机字符串           | Function(len:number)  | 生成随机字符串      | len为需要生成的字符串的长度                |
| fistLetterUpper | 字符串首字母大写         | Function(str:string)  | 字符串首字母大写    |                                            |
| cnTelFormat     | 中国手机号隐私操作       | Function(tel:number)  | 手机号中间四位变成* |                                            |
| getKebabCase    | 驼峰命名转换成短横线命名 | Function(str:string)  | 短横线命名          |                                            |
| getCamelCase    | 短横线命名转换成驼峰命名 | Function(str:string)  | 驼峰命名            |                                            |



#### 格式转换

| 方法名         | 说明               | 参数                   | 返回值                   | 备注 |
| -------------- | ------------------ | ---------------------- | ------------------------ | ---- |
| digitUppercase | 数字转化为大写金额 | Function(n:number)     | 大写金额                 |      |
| intToChinese   | 数字转化为中文数字 | Function(value:number) | 中文数字，如：一百三十五 |      |



#### 存储操作

| 方法名               | 说明               | 参数                              | 返回值             | 备注               |
| -------------------- | ------------------ | --------------------------------- | ------------------ | ------------------ |
| loalStorageSet       | 存储loalStorage    | Function(key:string,value:string) |                    | key为键，value为值 |
| loalStorageGet       | 获取localStorage   | Function(key:string)              | 获取localStorage   |                    |
| loalStorageRemove    | 删除localStorage   | Function(key:string)              |                    |                    |
| sessionStorageSet    | 存储sessionStorage | Function(key:string,value:string) |                    | key为键，value为值 |
| sessionStorageGet    | 获取sessionStorage | Function(key:string)              | 获取sessionStorage |                    |
| sessionStorageRemove | 删除sessionStorage | Function(key:string)              |                    |                    |



#### cookie操作

| 方法名    | 说明       | 参数                                            | 返回值     | 备注                                |
| --------- | ---------- | ----------------------------------------------- | ---------- | ----------------------------------- |
| setCookie | 设置cookie | Function(key:string,value:string,expire:number) |            | key为键，value为值,expire为过期时间 |
| getCookie | 读取cookie | Function(key:string)                            | 读取cookie |                                     |
| delCookie | 删除cookie | Function(key:string)                            |            |                                     |



#### 格式校验

| 方法名      | 说明                         | 参数                             | 返回值               | 备注 |
| ----------- | ---------------------------- | -------------------------------- | -------------------- | ---- |
| haveCNChars | 校验是否包含中文             | Function(value:string)           | true：包含中文       |      |
| isPostCode  | 校验是否为中国大陆的邮政编码 | Function(value:string)           | true：是中国大陆邮编 |      |
| isIPv6      | 校验是否为IPv6地址           | Function(str:string)             | true：是ipv6地址     |      |
| isEmail     | 校验是否为邮箱地址           | Function(value:string)           | true：是邮箱地址     |      |
| isTel       | 校验是否为中国大陆手机号     | Function(value:string \| number) | true：中国手机号     |      |



#### URL操作

| 方法名          | 说明                              | 参数                                                    | 返回值                    | 备注                                                         |
| --------------- | --------------------------------- | ------------------------------------------------------- | ------------------------- | ------------------------------------------------------------ |
| GetRequest      | 以对象的形式获取url后面拼接的参数 | Function(url:string)                                    | url后面拼接的参数对象     |                                                              |
| stringifyParams | 键值对拼接成URL参数               | Function(params:object)                                 | 返回键值对拼接成的URL参数 |                                                              |
| updateUrlParam  | 修改url参数中某个值               | Function(url:string,paramName:string,paramValue:string) | 返回修改后的url           | url 需要修改参数的URL<br />paramName 需要修改的参数名<br />paramValue 需要修改的参数值 |
| removeUrlParam  | 删除url中某个参数                 | Function(url:string,paramName:string)                   | 返回修改后的url           | url 需要修改参数的URL<br />paramName 需要修改的参数名        |



#### 判断设备

| 方法名              | 说明                       | 参数 | 返回值                       | 备注 |
| ------------------- | -------------------------- | ---- | ---------------------------- | ---- |
| isMobile            | 设备判断                   |      | mobile=>手机 desktop=>pc设备 |      |
| isAppleMobileDevice | 判断是苹果设备还是安卓设备 |      | true:苹果，false:安卓        |      |
| getExplorerInfo     | 浏览器型号和版本           |      | 浏览器型号和版本             |      |



#### 浏览器操作

| 方法名           | 说明               | 参数 | 返回值                   | 备注              |
| ---------------- | ------------------ | ---- | ------------------------ | ----------------- |
| scrollToTop      | 滚动到页面顶部     |      |                          |                   |
| scrollToBottom   | 滚动到页面底部     |      |                          |                   |
| smoothScroll     | 滚动到指定元素区域 |      | Function(element:string) | element:css选择器 |
| getClientHeight  | 获取可视窗口高度   |      | 可视窗口高度             |                   |
| getPageViewWidth | 获取可视窗口宽度   |      | 可视窗口宽度             |                   |
| toFullScreen     | 打开浏览器全屏     |      |                          |                   |
| exitFullscreen   | 退出浏览器全屏     |      |                          |                   |



#### 时间操作

| 方法名  | 说明         | 参数 | 返回值                              | 备注 |
| ------- | ------------ | ---- | ----------------------------------- | ---- |
| nowTime | 获取当前时间 |      | 当前时间：如 2023年1月01日 18:000:0 |      |



JavaScript操作

| 方法名          | 说明       | 参数                              | 返回值         | 备注                     |
| --------------- | ---------- | --------------------------------- | -------------- | ------------------------ |
| stopPropagation | 阻止冒泡   | Function(element:string)          |                | element:css选择器        |
| debounce        | 防抖函数   | Function(fn:Function,wait:number) | 防抖后函数     | fn 方法名<br />wait 时间 |
| throttle        | 节流函数   | Function(fn:Function,wait:number) | 节流后函数     | fn 方法名<br />wait 时间 |
| deepClone       | 对象深拷贝 | Function(obj:object)              | 深拷贝后的对象 |                          |


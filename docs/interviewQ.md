# 前端常见面试题

## HTML
> Doctype
```
标准模式：严格型（strict 4.0 strict 1.0 !Doctype html）
准标准模式：过度型(Transitional 4.0 Transitional 1.0) 框架集型(Frameset 4.0 Frameset 1.0)
```

> js 延迟加载和异步加载
```
// 延迟到文档完全加载或解析后执行脚本
<script src="" defer="defer"></script>
// 等同于在</body>前引入脚本
h5 会忽略 defer 属性，只在 IE4-7有效
H5 规范要求按照顺序执行，并且先于DOMContentLoaded事件之前执行，但实际中不是。
所以，实际中最好只有一个脚本用 defter 属性延迟加载

异步加载 async ，表示立即下载，但不妨碍页面中的其他操作
标记为 async 的脚本并不保证按顺序执行，所以要确保两者之间不会相互依赖。
确保不会修改DOM。
异步脚本一定会在 load 事件前执行，但是可能会在DOMContentLoaded 事件触发之前或之后执行。
```

## CSS
> CSS盒模型 不同盒模型的区别 如何改变盒模型
```
box-sizing:content-box border-box标准模式 怪异模式（ie5-6 未指定doctype的ie7-8）
标准width=content
怪异width content +padding+border
如何避免怪异模式影响
在父元素设置border padding
```

> CSS 样式优先级计算规则（权重）
```
行内样式（1000） > 内联样式 > 外联样式
!important > id (100) > class(10) > element/伪元素(1) > */>/+(0)
```

#### 布局
> 水平垂直居中

> 两栏布局，三栏布局

> position各属性及区别,z-index

> 浮动与清除浮动

> flexbox布局

> hack 方式

> 重绘 回流
重绘：样式变化
回流：DOM结构或位置变化，自上而下
触发：任何引起dom变化和样式变化的行为
降低：多个样式放在class里，一次改变，用position:absolute和fixed处理动画父元素等

## JS
#### 基本概念
> js 数据类型
```
5种基本数据类型：
Undefined、Null、Boolean、Number、String
1种复杂数据类型：Object
```

> null 和 undefined 区别
```
用法差不多:
    null == undefined   // true
    在 if 中都会被转化为 false
undefined:声明但是未初始化
null：表示一个空对象的指针(历史遗留问题)
```
http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html

> 函数重载
```
php 等语言，声明两个名称相同但接受参数类型和数目不同的函数，在调用时，会根据传入的参数自动调用。
js中，实现方式是在同一个函数中判断传入的参数数目和类型，来调用不同的逻辑。
```
> 函数柯里化：预处理参数，返回接收单一参数的函数(闭包)
#### 变量、作用域和内存问题
> 引用
```
ECMA 变量包含两种不同类型的值：基本类型和引用类型
基本类型指的是简单的数据段，引用类型指的是对象
```
http://note.youdao.com/noteshare?id=c3673c483f52b9c939299a1bc1c3cb97

> 深拷贝浅拷贝
```
浅复制：实际上是复制了内存地址 a=b
深复制：
    数组：slice（satrt, end）、concat（array1[, arrayn]）
    对象：对各属性递归调用浅复制
```

> 类型检查
```
typeof: "obejct"（对象或null或regexp IE Firefox） "function"（function regexp） "undefined" "boolean" "string"
instanceof/constructor：检测某一个实例是否属于某一个类，局限性
Object.prototype.toString.call(value)：找到Object原型上的toString方法,让方法执行,并且让方法中的this变为value
Object.prototype.toString：返回对应值的所属类信息
```

> this 相关 作用域 作用域链
```
js 存在执行环境，和与之关联的变量对象（this）。
this 一般指向调用它的对象，es6 中指向定义它的对象。
每个函数都有自己的执行环境（作用域）。当执行流进入一个对象，函数的环境就会被推入一个执行栈中。
这时，会创建一个变量对象的作用域链。
作用域链的前端，是函数的arguments，然后依次向上回溯。
```

> call、apply、bind 的区别
```
a.call(b, arg1,arg2, ...)：改变 a 运行时的上下文 this 为 b，并执行 a。或者说是将 a 作为 b 对象的方法执行。
a.apply(b, args)：args 为数组。
a.bind(b, arg1,arg2, ...)：改变 a 运行时的上下文 this 为 b，不执行。ES5.
在 IE6-8中模拟 bind：
if (!function() {}.bind) {
    Function.prototype.bind = function(context) {
        var self = this,
            args = Array.prototype.slice.call(arguments);

        return function() {
            return self.apply(context, args.slice(1));
        }
    };
}
```

> 垃圾回收机制
```
js 具有自动垃圾收集机制。当函数执行之后，函数内的局部变量会被标记并销毁。
在浏览器中主要有以下两种方式：
标记清除：最常用
引用计数：Netscape Nevgatitor 3.0和IE DOM BOM（COM 对象，IE9后改成JS对象），会产生循环引用问题，手动清除解决。
```

#### 引用类型
> 数组的操作

> 数组去重
```
1.常用indexOf，但是在ie6-8没有indexOf方法，需要自己实现
2.最优：循环数组，用数组的值作为对象的属性，判断值是否存在，若存在，则取出这个数组的值，若不存在，则设置值为1
```

#### 面向对象的程序设计
> 面向对象

> js 继承机制
```
原型链
借用构造函数
组合式继承
原型继承
寄生式继承
寄生组合式继承
```

> js闭包

> 预编译和执行期

> 原型和原型链，构造函数

> JS的事件行为:冒泡、捕获及两者关系

> html5本地存储

> es6 promise

> 异步编程

http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html


> 模块化编程：amd cmd 规范，及规范的实现类库
```
commonjs 同步
requirejs 异步 业务逻辑作为回调
seajs  同步 需要预编译 在业务代码加载前预编译所有模块
```

#### ajax

> 解决跨域的方法
```
jsonp /h5 postMessage/ ajax crossDomain 后端加access-origin true（CROS）
```
> GET POST 区别

#### 正则

### 页面优化

> CSS优化

## 类库

#### jQuery
> addclass原理，事件流

#### Zepto
> 解释点透 如何解决

#### angular
> angular 依赖注入

#### react
> redux的原理

## 兼容性

## 打包编译产出
> gulp 在打包中的作用

## 前后端交互

> http 状态码

> 前后端分离 好处 实现方式

## 与 Android、IOS 交互
webViewJavascriptBridge
安卓4.4之前用的是javascriptInterface,存在漏洞

## 数据结构和算法

## 设计模式
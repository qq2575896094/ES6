## Module

1. 严格模式

   ```
   ES6的模块自动采用严格模式,不管你有没有在模块头部加上"use strict".
   严格模式主要有以下限制:
   	- 变量必须声明后在使用
   	- 函数的参数不能有同名属性,否则报错
   	- 不能使用with语句
   	- 不能对只读属性赋值,否则报错
   	- 不能使用前缀0表示八进制数,否则报错
   	- 不能删除变量delete prop,会报错,只能删除属性delete global[prop]
   	- eval不会在它的外层作用域引入变量
   	- eval和arguments不能被重新赋值
   	- arguments不会自动反映函数参数的变化
   	- 不能使用arguments.callee
   	- 不能使用arguments.caller
   	- 禁止this指向全局对象
   	- 不能使用fn.caller和fn.arguments获取函数调用的堆栈
   	- 增加了保留字(比如protected、static和interface)
   ```

   ​

2. export命令

   ```
   模块功能主要有两个命令构成:export和impprt.
   export:用于规定模块的对外接口;
   import:用于输入其他模块提供的功能.
   一个模块就是一个独立的文件.该文件内部的所有变量,外部无法获取.如果你希望外部能够读取模块内部的某个变量,就必须使用export关键字输出改变量.
   export输出的变量就是本来的名字,但是可以使用as 关键字重命名.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Module/WX20171110-110945@2x.png)

   ​

3. import命令

   ```
   使用export命令定义了模块的对外接口以后,其他的js文件就可以使用inport命令加载这个模块.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Module/WX20171110-111056@2x.png)

   ​

4. 模块的整体加载

   ```
   除了指定加载某个输出值,还可以使用整体加载,即用星号(*)指定一个对象,所有输出值都加载在这个对象上面.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Module/WX20171110-111851@2x.png)

   ​

5. export default命令

   ```
   使用import命令的时候,用户需要知道所要加载的变量名或是函数名,否则无法加载.
   为了给用户提供方便,让他们不用阅读文档就能加载模块,就要用到 export default命令,让模块指定默认输出.
   ```

   ​

6. export与import的复合写法

7. 模块的继承

8. 跨模块常量

   ```
   const声明的常量只能在当前代码块有效.如果想设置跨模块的常量,或者说一个值要被多个模块共享.
   export const A='a';export const B='b';
   import * as consts from "./consts";
   ```

   ​

9. inport()

   ```
   目前,只是一个提案,暂不支持!
   ```

   ​
## async 函数

1. 含义

   ```
   ES2017 标准引入了async函数,使得异步操作变得更加方便.
   async函数对generator函数的改进 : 
   	- 内置执行器
   	- 更好的语义
   	- 更好的适用性
   	- 返回值是 Promise
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/async/WX20171113-100657@2x.png)

   ​

2. 基本用法

   ```
   async函数返回一个Promise对象,可以使用then方法添加回调函数.当函数执行的时候,一旦遇到await就会先返回,等到异步操作完成,再接着执行函数体内后面的语句.
   ```

   ​

3. 语法

   ```
   async函数的语法规则总体上比较简单,难点是错误处理机制.
   返回Promise对象.
   	async函数内部返回的值,会成为then方法回调函数的参数.
   	async函数内部抛出错误,会导致返回的Promise对象变为reject状态.抛出的错误对象会被catch方法回调函数接收到.
   Promise 对象的状态变化
   	async函数返回的Promise对象,必须等到内部所有await命令后面的Promise对象执行完,才会发生状态变化,除非遇到return语句或者抛出错误.也就是说,只有async函数内部的异步操作执行完,才会执行then方法指定的回调函数.
   await命令
   	正常情况下,await命令后面是一个Promise对象,如果不是,会被转成一个立即reslove的Promis对象.
   错误处理
   	如果await后面的异步操作出错,那么等同于async函数返回的Promise对象被reject.
   使用注意点 :
   	- await命令后面的Promise对象,运行结果可能是rejected,所以最好把await命令放在try catch代码块中.
   	- 多个await命令后面的一步操作,如果不存在串行关系,最好让他们并发.
   	- await命令只能用在async函数中.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/async/WX20171113-100657@2x.png)

   ​

4. async 函数的实现原理

   ```
   async函数的实现原理,就是将Generator函数和自动执行器,包装在一个函数里.
   ```
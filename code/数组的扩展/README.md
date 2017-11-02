## 数组的扩展

1. 扩展运算符

   1. 含义

      ```
      扩展运算符是三个点(...).它好比rest参数的逆运算,将数组转为用逗号分隔的参数序列.
      ```

      ![图片](https://github.com/qq2575896094/ES6/blob/master/images/函数的扩展/WX20171102-093214@2x.png)

   2. 替代数组的 apply 方法

      ```
      由于扩展运算符可以展开数组,所以不需要apply方法,将数组转为函数的参数.
      ```

      ![图片](https://github.com/qq2575896094/ES6/blob/master/images/函数的扩展/WX20171102-100321@2x.png)

   3. 扩展运算符的应用

      ```
      1. 赋值数组(数组是复合的数据类型,直接复制的话,只是复制了指向底层数据结构的指针,而不是克隆一个新的数组).
      2. 合并数组
      3. 与解构赋值结合
      4. 字符串
      5. 实现Iterator接口的对象
      6. Map 和Set结构,Generator函数
      ```

      ​

2. Array.from()

   ```
   Array.from方法用于将两类对象转为真正的数组:类似数组的对象和可遍历的对象.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/函数的扩展/WX20171102-102735@2x.png)

   ​

3. Array.off()

   ```
   Array.off方法用于将一组值,转为数组.
   Array.off基本上可以用来代替Array()或new Array(),并且不存在由于参数不同而导致的重组.
   ```

   ​

4. 数组实例的 copyWithin()

   ```
   在当前数组内部,将指定位置的成员复制到其他位置(会覆盖原有成员),然后返回当前数组.
   Array.prototype.copyWithin(target,start=0,end=this.length);
   -target	:从该位置开始替换数据
   -start	:从该位置开始读取数据,默认是0.如果为负值,表示倒数.
   -end	:到该位置前停止读取数据,默认等于数组长度.如果为负值,表示倒数.
   ```

   ​

5. 数组实例的 find() 和 findIndex()

   ```
   find方法 : 用于找出第一个符合条件的数组成员.它的参数是一个回调函数,所有数组成员依次执行该回调函数,直到找出第一个返回值为true的成员,然后返回该成员.如果没有符合条件的成员,则返回undefined.
   findIndex方法	: 与find方法非常类似,返回一个符合条件的数组成员位置,如果所有成员都不符合条件,则返回-1.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/函数的扩展/WX20171102-110150@2x.png)

   ​

6. 数组实例的fill()

   ```
   fill方法使用给定值,填充一个数组.
   fill 还可以接收第二个和第三个参数,用于指定填充的起始位置和结束位置.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/函数的扩展/WX20171102-110604@2x.png)

   ​

7. 数组实例的 entries(),keys() 和 values()

   ```
   ES6提供entries(),keys()和values()--用于遍历数组.
   entries()是对键值对的遍历;
   keys()是对key的遍历;
   values()是对value的遍历.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/函数的扩展/WX20171102-112215@2x.png)

8. 数组实例的 includes()

   ```
   返回一个布尔值,表示某个数组是否包含给定的值,与字符串的includes方法类似.
   该方法的第二个参数表示搜索的起始位置,默认是0.如果第二个参数为负数,则表示倒数的位置,如果这时它大于数组的长度,则会重置为从0开始.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/函数的扩展/WX20171102-112955@2x.png)

   ​

9. 数组的空位

   ```
   ES6明确将空位转为undefined.
   ```

   ​
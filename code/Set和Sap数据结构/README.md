## Set和Sap数据结构

1. Set

   ```
   基本用法:
   1. ES6提供了新的数据结构Set.它类似数组,但是成员的值都是唯一的,没有重复的值.
   2. Set本身是一个构造函数,用来生成Set数据结构.
   3. Set函数可以接受一个数组(或是具有iterable接口的数据结构)作为参数,用来初始化.
   4. Set内部判断两个值是否不同,使用的是类似(===).
   Set实例的属性和方法
   Set结构的实例有以下属性:
   1. Set.prototype.constructor : 构造函数,默认就是Set函数.
   2. Set.prototype.size : 返回Set实例的成员总数.
   Set实例的方法分为两大类:操作方法(用于操作数据)和遍历方法(用于遍历成员).
   1. add(value): 添加某个值,返回Set结构本身.
   2. delete(value): 删除某个值,返回一个布尔值,表示删除是否成功.
   3. has(value): 返回一个布尔值,表示该值是否为Set的成员.
   4. clear(): 清除所有成员,没有返回值.
   Array.from方法可以将Set结构转为数组.
   遍历操作
   1. keys()
   2. values()
   3. entries()
   4. forEach()
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Set和Sap数据结构/WX20171114-101007@2x.png)

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Set和Sap数据结构/WX20171114-101104@2x.png)

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Set和Sap数据结构/WX20171114-101129@2x.png)

   ​

2. WeakSet

   ```
   WeakSet结构与Set类似,也是不重复值的集合.但是,它和Set有两个区别.
   1. WeakSet的成员只能是对象,而不能是其他类型的值.
   2. WeakSet中的对象都是弱引用,即垃圾回收机制不考虑WeakSet对该对象的引用,也就是说其他对象都不再引用该对象,那么垃圾回收机制会自动回收该对象所占用的内存,不考虑该对象还存在于WeakSet之中.
   ```

   ```
   WeakSet是一个构造函数,可以使用new命令,创建WeakSet数据结构.
   WeakSet可以接受一个数组或类似数组的对象作为参数.
   WeakSet结构有三个方法:
   1. WeakSet.prototype.add(value): 向WeakSet实例添加一个新成员.
   2. WeakSet.prototype.delete(value): 清除WeakSet实例的指定成员.
   3. WeakSet.prototype.has(value): 返回一个布尔值,表示某值是否存在.
   ```

   ​

3. Map

   ```
   JavaScript的对象(object),本质上是键值对的集合(Hash结构),但是传统上只能用字符串当做键值.
   Map数据结构类似于对象,提供了"值--值"的对应.
   ```

   ​

4. WeakMap
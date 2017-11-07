## Class 的基本语法

1. 简介

   ```
   ES6提供了更接近传统语言的写法,引入了Class(类)的概念,作为对象的模板.通过class关键字,可以定义类.
   基本上,ES6的class可以看做只是一个语法糖,它的巨大部分功能,ES5都可以做到,新的class写法只是让对象原型的写法更加清晰,更加面向对象编程的语法而已.
   ES6的类,完全可以看作是构造函数的另一种写法.
   构造函数的prototype属性在ES6de类上面继续存在.事实上,类的所有方法都定义在类的prototype属性上.
   类的内部所有定义的方法,都是不可枚举的.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的基本语法/WX20171107-094432@2x.png)

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的基本语法/WX20171107-095636@2x.png)

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的基本语法/WX20171107-100516@2x.png)

   ​

2. 严格模式

   ```
   类和模块的内部,默认就是严格模式,所以不需要使用use strict指定运行模式.只要你的代码写在类或是模块之中,就只有严格模式可用.
   ```

   ​

3. constructor方法

   ```
   constructor方法是类的默认方法,通过new命令升恒对象实例时,自动调用该方法.一个类必须有constructor方法,如果没有显示定义,一个空的constructor方法会被默认添加.
   ```

   ​

4. 类的实例对象

   ```
   生成类的实例对象的写法,也是使用new名利.
   实例的属性除非显示定义在其本事(即定义在this对象上),否则都是定义在原型上(即定义在class上).
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的基本语法/WX20171107-102302@2x.png)

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的基本语法/WX20171107-102432@2x.png)

   ​

5. Class表达式

   ```
   与函数一样,类也可以使用表达式的形式定义.
   采用Class表达式,可以写出立即执行的Class.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的基本语法/WX20171107-103652@2x.png)

   ​

6. 不存在变量提升

   ```
   类不存在变量提升.
   ```

   ​

7. 私有方法

   ```
   是有方法是常见需求,但ES6不提供,只能通过变通方法模式实现.
   一种做法是在命名上加以区别.但是这种命名是不保险的,在类的外部还是可以调用到这个方法的.
   另一种方法是索性将私有方法移出模块,因为模块内部的所有方法都是对外可见的.
   ```

   ​

8. 私有属性

   ```
   目前,ES6不支持私有属性!
   ```

   ​

9. this 的指向

10. Class 的取值函数(getter) 和存值函数(setter)

11. Class 的Generator方法

12. Class 的静态方法

13. Class 的静态属性和实例属性

14. new.target属性
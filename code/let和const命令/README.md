# let和const命令
1. let命令
    + let声明的变量只在它所在的代码块有效。
    + 不存在变量提升
2. 块级作用域
3. const命令
4. 顶层对象的属性
5. global对象

## let命令

### let声明的变量只在它所在的代码块有效

**``let命令用来声明变量.它的语法类似于var,但所声明的变量,只在let命令所在的代码块内有效.``**  
![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-100041%402x.png)

> **``计数器i只在for循环体内有效，在循环体外引用就会报错。``**
> **``变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是5。``**  
![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-102829@2x.png)


### 不存在变量提升

+ **``var命令会发生”变量提升“现象(脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined。)，即变量可以在声明之前使用，值为undefined。``**
+ **``let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。``**  
![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-104826@2x.png)


## 暂时性死区

> **``只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。``**
> **``总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）``**
> **``“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。``**  
![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-110735@2x.png)


## 不允许重复声明
> **``let不允许在相同作用域内，重复声明同一个变量。``**  
![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-112030@2x.png)



## 块级作用域


### 应用场景

> + 内部变量可能会覆盖外部变量
> + 用来计数的循环变量泄露为全局变量  

![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-114154@2x.png)

> **立即执行函数表达式（IIFE）**
![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-142104@2x.png)


## 块级作用域与函数声明
> **允许在块级作用域之中声明函数。块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。**  
![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-144628@2x.png)


### do 表达式

> **本质上，块级作用域是一个语句，将多个操作封装在一起，没有返回值。**



## const命令

### const声明一个只读的常量。一旦声明，常量的值就不能改变。

![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-173059@2x.png)

### const一旦声明变量，就必须立即初始化，不能留到以后赋值。

![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-173649@2x.png)

### const的作用域与let命令相同：只在声明所在的块级作用域内有效。

![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-174836@2x.png)


### const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-175247@2x.png)


### const声明的常量，也与let一样不可重复声明。

![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171027-175456@2x.png)



### const只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。



### 顶层对象的属性

### 顶层对象,在浏览器环境指的是window对象.在 Node 指的是global对象。

### var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。

![图片](https://github.com/qq2575896094/ES6/blob/master/images/WX20171030-092608@2x.png)


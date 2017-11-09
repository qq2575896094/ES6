## Class的继承

1. 简介

   ```
   Class可以通过extends关键字实现继承.
   ES6实质上是现创建父类的实例对象this(所以必须先调用super方法),然后在用子类的构造函数修改this.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的继承/WX20171109-092615@2x.png)

   ​

2. Object.getPrototypeOf()

   ```
   Object.getPrototypeOf()方法可以用来从子类上获取父类.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的继承/WX20171109-095328@2x.png)

   ​

3. super关键字

   ```
   既可以当做函数使用,也可以当对象使用.
   第一种,super作为函数调用时(只能在子类的构造函数中),代表父类的构造函数.ES6要求,子类的构造函数必须执行一次super函数.
   第二种,super作为对象时,在普通方法中,指向父类的原型对象,在静态方法中,指向父类.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的继承/WX20171109-101420@2x.png)

   ​

4. 类的prototype属性和proto属性

   ```
   Class 作为构造函数语法糖,同事有prototype属性和__proto__属性,因此同时存在两条继承链.
   1. 子类的__proto__属性,表示构造函数的继承,总是指向父类.
   2. 子类的prototype属性的__proto__属性,表示方法的继承,总是指向父类的prototype属性.
   extends的集成目标
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的继承/WX20171109-102615@2x.png)

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/Class的继承/WX20171109-113124@2x.png)

5. 原生构造函数的继承

   ```
   原生构造函数是指语言内置的构造函数,通常用来生成数据结构.
   - Boolean()
   - Number()
   - String()
   - Array()
   - Date()
   - Function()
   - RegExp()
   - Error()
   - Object()
   ```

   ​

6. Mixin模式的实现

   ```
   Mixin指的是多个对象合成一个新的对象,新对象具有各个成员的借口.
   ```

   ​
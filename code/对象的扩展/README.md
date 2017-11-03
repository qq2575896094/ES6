## 对象的扩展

1. 属性的简洁表示法

   ```
   ES6允许直接写入变量和函数,作为对象的属性和方法.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171103-093039@2x.png)

2. 属性名表达式

   ```
   JavaScript定义对象的属性,有两种方法.
   属性名表达式和属性的简洁表达式不能同时使用.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171103-094142@2x.png)

3. 方法的 name 属性

   ```
   函数的name属性,返回函数名,对象方法也是函数,因此也有name属性.
   若果对象的方法使用了取值函数(getter)和存值函数(setter),则name属性不是在该方法上面,而是在该方法的属性的描述对象的get和set属性上面,返回值是方法名前加上get和set.
   有两种特殊情况:
   	bind方法创造的函数,name属性返回bound加上原函数的名字;
   	Function构造函数创造的函数,name属性返回anonymous.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171103-100856@2x.png)

   ​

4. Object.is()

   ```
   ES5比较两个值是否相等,只有连个运算符:==和===.前者会自动转换数据类型,后者NaN不等于本身,+0等于-0.
   ES6提出同值相等算法.Object是用来比较两个值是否严格相等,与===的行为基本一致
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171103-102128@2x.png)

5. Object.assign()

   ```
   基本用法:
   	Object.assign方法用于对象的合并,将原对象的所有可枚举属性,复制到目标对象.第一个参数是目标对象,后面的参数都是原对象.如果属性名相同,后面的会覆盖前面的属性.
   	如果对象参数出现在原对象的位置,这些参数先转成对象,如果无法转成对象就会跳过.
   	拷贝的属性是有限的,只拷贝原对象的自身属性(不拷贝继承属性),也不拷贝不可枚举属性.
   注意:
   	1. 浅拷贝(如果原对象某个属性的值是对象,那么目标对象拷贝得到的是这个对象的引用)
   	2. 同名属性的替换
   	3. 数组的处理(将数组视为对象)
   	4. 取值函数的处理(将求值后在复制)
   常见用途:
   	1. 为对象添加属性
   	2. 为对象添加方法
   	3. 克隆对象
   	4. 合并多个对象
   	5. 为属性指定默认值
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171103-112508@2x.png)

6. 属性的可枚举性和遍历

   ```

   ```

   ​

7. Object.getOwnPropertyDescriptors()

8. proto属性,Object.setPrototypeOf(),Object.getPrototypeOf()

9. super关键字

10. Object.keys(),Object.values(),Object.entries()

11. 对象的扩展运算符

12. Null传导运算符
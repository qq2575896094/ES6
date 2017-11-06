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

   1. 可枚举性

      ```
      对象的每个属性都有一个描述对象,用来控制该属性的行为.Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象.
      会忽略enumerable为false的四个操作:
      	1. for...in...
      	2. Object.keys()
      	3. JSON.stringify()
      	4. Object.assign()
      ```

      ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171106-095224@2x.png)

   2. 属性的遍历

      ```
      ES6一共有5种方法可以遍历对象的属性.
      1. for...in
      	遍历对象自身的和继承的可枚举属性(不含Symbol属性).
      2. Object.keys()
      	返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性)的键名.
      3. Object.getOwnPropertyNames(obj)
      	返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包含不可枚举属性)的键名.
      4. Object.getOwnPropertySymbols(obj)
      	返回一个数组,包含对象自身的所有Symbol属相的键名.
      5. Reflect.ownKeys(obj)
      	返回一个数组,包含对象自身的所有键名,不管键名是Symbol或是字符串,也不管是否可枚举.
      ```

      ​

7. Object.getOwnPropertyDescriptors()

   ```
   目前,不支持该方法!
   ```

   ​

8. proto属性,Object.setPrototypeOf(),Object.getPrototypeOf()

   1. proto属性

      ```
      proto属性(前后各两个下划线),用来读取或设置当前对象的prototype对象.__proto__前后的双下划线,说明他本质上是一个内部属性,而不是一个正式的对外的API,只是由于浏览器广泛支持,才被加入了ES6.标准明确规定,只有浏览器必须部署这个属性,其他运行环境不一定需要部署,而且新的代码最好认为这个属性是不存在的.因此,无论从语义角度,还是从兼容性的角度,都不要使用这个属性,而使用:
      	Object.setPrototypeOf()	:	写操作
      	Object.getPrototypeOf()	:	读操作
      	Object.create			:	生成操作
      实际上,__proto__调用的是Object.prototype.__proto__.
      ```

      ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171106-101717@2x.png)

   2. Object.setPrototypeOf()

      ```
      该方法的作用与__proto__相同,用来设置一个对象的prototype对象,返回参数对象本身.
      ```

      ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171106-103741@2x.png)

   3. Object.getPrototypeOf()

      ```
      该方法与Object.setPrototypeOf()方法配套.用于读取一个对象的原型对象.
      ```

      ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171106-104532@2x.png)

      ​

9. super关键字

   ```
   this关键字总是指向函数所在的当前对象,ES6又新增了另一个类似的关键字super,指向当前对象的原型对象.
   注意 : super关键字表示原型对象时,只能用在对象的方法中,用在其他地方都会报错.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171106-141052@2x.png)

10. Object.keys(),Object.values(),Object.entries()

   1. Object.keys()

      ```
      返回一个数组,成员是参数对象本身(不含继承的)所有可遍历属性的键名.
      ```

   2. Object.values()

      ```
      返回一个数组,成员是参数对象本身(不含继承的)所有可遍历属性的键值.
      ```

   3. Object.entries()

      ```
      返回一个数组,成员是参数对象本身(不含继承的)所有可遍历属性的键值对数组.
      ```

      ![图片](https://github.com/qq2575896094/ES6/blob/master/images/对象的扩展/WX20171106-144246@2x.png)

11. 对象的扩展运算符

    1. 解构赋值

       ```
       对象的解构赋值用于从一个对象取值,相当于将所有可遍历的、但尚未被独缺的属性,分配到指定的对象上面,所有的键和他们的值,都会拷贝到新的对象上.
       ```

    2. 扩展运算符

       ```
       用于取出参数对象的所有可遍历属性,拷贝到当前对象之中.
       ```
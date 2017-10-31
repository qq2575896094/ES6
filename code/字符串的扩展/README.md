## 字符串的扩展

1. 字符串的Unicode表示法

   ````
   JavaScript允许采用\uxxxx形式表示一个字符,其中xxxx表示字符的Unicode码点.
   这种表示法只限于码点在\0000~\uFFFF之间.超出这个范围的字符,必须用两个双字节的形式表示.
   ES6对于只要将码点放入大括号中,就能正确解读该字符.
   ````

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/字符串的扩展/WX20171030-152717@2x.png)

   ​

2. codePointAt()

   ````
   JavaScript内部,字符以UTF-16的格式存储,每个字符固定为2个字节.对于那些需要4个字节存储的字符(Unicode码点大于0xFFFF的字符),JavaScript会认为它们是两个字符.
   ES6提供codePointAt方法,能够正确处理4个字节存储的字符,返回一个字符的码点.
   codePointAt()方法的参数,是字符在字符串中的位置(从0开始).codePointAt方法会正确返回32位的UTF-16字符的码点.
   ````

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/字符串的扩展/WX20171030-155352@2x.png)

   ​

3. String.fromCodePoint()

   ````
   ES5提供String.fromCharCode方法,用于从码点返回对应字符,但是这个方法不能识别32位的UTF-16字符.
   ES6提供了String.fromCodePoint方法,可以识别大于0xFFFF的字符.在作用上,正好与codePointAt方法相反.
   ````

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/字符串的扩展/WX20171030-160625@2x.png)

   ​

4. 字符串的遍历器接口

   ````
   ES6为字符串添加了遍历器接口,使得字符串可以被for...of循环遍历.
   除了遍历字符串,这个遍历器最大的优点是可以识别大于0xFFFF的码点,传统的for循环无法识别这样的码点.
   ````

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/字符串的扩展/WX20171030-161919@2x.png)

5. at()

   ```
   ES5对字符串对象提供了charAt()方法,返回字符串给定位置的字符.该方法不能识别码点大于0xFFFF的字符.
   ES6中at()方法可以识别Unicode编码大于0xFFFF的字符,返回正确的字符.

   目前,该方法还不支持!
   ```

   ​

6. normalize()

   ```
   略
   ```

   ​

7. includes(),startsWith(),endsWith()

   ```
   在传统上,JavaScript只有indexOf方法,可以用来确定一个字符串是否在另一个字符串中.现在ES6中,新增三个方法:
   includes():	返回布尔值,表示是否找到了参数字符串;
   startWith():返回布尔值,表示参数字符串是否在原字符串的头部;
   endsWith():	返回布尔值,表示参数字符串是否在原字符串的尾部;

   这三个方法都支持第二个参数,表示开始搜索的位置.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/字符串的扩展/WX20171030-164248@2x.png)

8. repeat()

   ```
   repeat()方法返回一个新字符串,表示将原字符串重复n次.
   参数如果是小数,会被取整;如果是负数或是Infinity,会报错;如果是NaN或是-0或是+0,repeat视为0;如果是字符串,则先转成数字.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/字符串的扩展/WX20171030-171121@2x.png)

   ​

9. padStart(),padEnd()

   ```
   ES2017引入字符串补全长度的功能.如果某个字符串不够指定长度,会在头部或尾部补全.
   padStart():在头部补全;
   padEnd():在尾部补全.
   都接收两个参数,第一个参数用来指定字符串的最小长度,第二个参数用来补全的字符串.

   目前暂不支持.
   ```

   ​

10. 模板字符串

   ```
   模板字符串是增强版的字符串,用反引号(`)标识.它可以当做普通字符串使用,也可以用来定义多行字符串,或者字符串中嵌套变量.
   ```

   ![图片](https://github.com/qq2575896094/ES6/blob/master/images/字符串的扩展/WX20171031-102624@2x.png)

   ​

11. 标签模板

    ```
    紧跟在一个函数后面,该函数将被调用来处理这个模板字符串.
    标签模板其实不是模板,而是函数调用的另一种特殊形式."标签"指的就是函数,紧跟在后面的模板字符串就是他的参数.
    ```

    ​

12. String.raw()

    ```
    String.raw方法,往往用来充当模板字符串的处理函数,返回一个斜杠都被转义(即斜杠前面再加一个斜杠)的字符串,对应于替换变量后的模板字符串.

    目前不支持!
    ```


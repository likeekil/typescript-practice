/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");

// 简写模块导出的类型将是any
// import { x, y } from "hot-new-module";
// x(y);

// 明确列出导入的名字
import { SomeType, someFunc } from "./MyThings";
let x = new SomeType();
let y = someFunc();

// 使用命名空间导入模式当你要导入大量内容的时候
import * as myLargeModule from "./MyLargeModule";
let x1 = new myLargeModule.Dog();


// 使用重新导出进行扩展
// 你可能经常需要去扩展一个模块的功能，js里常用的一个模式是jq那样去扩展原对象，如我们之前提到的，
// 模块不会像全局命名空间对象那样去合并，推荐方案是，不要去改变原来的对象，而是导出一个新的实体来提供新的功能

// 使用test测试计算
import { Calculator, test } from "./Calculator";

let c0 = new Calculator();
test(c0, "1+2*33/11"); //

import { Calculator_1 } from "./ProgrammerCalculator";

let c9 = new Calculator_1(2);
test(c9, "001+010="); // prints 3



// 模块里不要使用命名空间



// 模块具有自己的作用域，并且只有导出的声明才会在模块外部可见。记住这点，命名空间在使用模块时几乎没有什么价值

// 在组织方面，命名空间对于全局作用域内逻辑上相关和类型进行分组是很便利的
// 通过将类型有层次的组织在命名空间里，可以方便用户找到并且使用类型。
// 模块本身已经存在于文件系统中。
// 我们必须通过路径和文件名找到他们，这已经在逻辑上提供了组织形式

// 命名空间对解决全局作用域里命名冲突来说是很重要的


// 危险信号
// 1.文件顶层声明是 export namespace Foo {} (删除Foo并把所有内容向上层移动)
// 2.文件只有一个 export class或者export function (考虑使用export defualt)
// 3.多个文件顶层有同样的export namespace Foo{} (Foo不会合并)




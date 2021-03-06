// 使用命名空间(不可以声明依赖)
// 命名空间是位于全局命名空间下的一个普通的带有名字的js对象
// 可以再多文件中同时使用，并通过   --outFile 结合在一起
// 但是像其他的全局命名空间污染一样，很难去辨识组件之前的依赖关系
// 使用模块(可以声明依赖)
// 模块会把依赖添加到模块加载器上，提供了更好的封闭性
// 命名空间的模块陷阱
// 对模块使用  /// <reference>
// import是如何定位模块类型的信息的？
// 编译器首先尝试去找相应路径下的.ts .tsx 在或者.d.ts。如果这些都找不到，编译器会查找  外部模块声明

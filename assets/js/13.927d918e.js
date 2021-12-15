(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{925:function(t,s,a){"use strict";a.r(s);var n=a(66),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),a("p",[t._v("几乎所有的编程语言都原生支持数组类型，因为数组是最简单的内存数据结构。JavaScript里也有数组类型，尽管它的第一个版本并没有支持数组。")]),t._v(" "),a("p",[t._v("数组存储一系列同一种数据类型的值。虽然在 JavaScript 里，也可以在数组中保存不同类型\n的值，但我们还是遵守最佳实践，避免这么做（大多数语言都没这个能力）。")]),t._v(" "),a("h2",{attrs:{id:"一、为什么用数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么用数组"}},[t._v("#")]),t._v(" 一、为什么用数组")]),t._v(" "),a("p",[t._v("假如有这样一个需求：保存所在城市每个月的平均温度。可以这么做：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" averageTempJan "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" averageTempFeb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("35.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" averageTempMar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" averageTempApr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("52")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" averageTempMay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[t._v("当然，这肯定不是最好的方案。按照这种方式，如果只存一年的数据，我们能管理 12 个变量。若要多存几年的平均温度呢？")]),t._v(" "),a("p",[t._v("幸运的是，我们可以用数组来解决，更加简洁地呈现同样的信息。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" averageTemp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \naverageTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \naverageTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("35.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \naverageTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \naverageTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("52")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \naverageTemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h2",{attrs:{id:"二、创建和初始化数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、创建和初始化数组"}},[t._v("#")]),t._v(" 二、创建和初始化数组")]),t._v(" "),a("p",[t._v("用 JavaScript 声明、创建和初始化数组很简单，就像下面这样:")]),t._v(" "),a("ol",[a("li",[t._v("{1}，数组构造器")]),t._v(" "),a("li",[t._v("{2}，传递数组的长度")]),t._v(" "),a("li",[t._v("{3}，传递数组的元素")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" daysOfWeek "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {1} ")]),t._v("\ndaysOfWeek "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {2} ")]),t._v("\ndaysOfWeek "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sunday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Monday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tuesday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Wednesday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Thursday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Friday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Saturday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {3} ")]),t._v("\n")])])]),a("p",[t._v("最简单也是最常用的方式:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" daysOfWeek "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" daysOfWeek "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sunday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Monday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tuesday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Wednesday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Thursday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Friday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Saturday'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("h2",{attrs:{id:"三、添加元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、添加元素"}},[t._v("#")]),t._v(" 三、添加元素")]),t._v(" "),a("p",[a("strong",[t._v("在数组末尾插入元素")])]),t._v(" "),a("p",[t._v("在 JavaScript 中，数组是一个可以修改的对象。如果添加元素，它就会动态增长。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("在数组开头插入元素")])]),t._v(" "),a("p",[t._v("现在，我们希望在数组中插入一个新元素，不像之前那样插入到最后，而是放到数组的开头。为了实现这个需求，首先要腾出数组里第一个元素的位置，把所有的元素向右移动一\n位。下面的代码表现了这段逻辑。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("insertFirstPosition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnumbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertFirstPosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("unshift")]),t._v(" 方法就是拥有上述能力的方法，可以直接把数值插入数组的开头（此方法背后的逻辑和 insertFirstPosition 方法的行为是一样的）。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unshift")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \nnumbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unshift")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"四、删除元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、删除元素"}},[t._v("#")]),t._v(" 四、删除元素")]),t._v(" "),a("p",[t._v("目前为止，我们已经学习了如何给数组的开始和结尾位置添加元素。下面来看一下怎样从数\n组中删除元素。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-从数组末尾删除元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-从数组末尾删除元素"}},[t._v("#")]),t._v(" 4.1 从数组末尾删除元素")]),t._v(" "),a("p",[t._v("要删除数组里最靠后的元素，可以用 pop 方法。")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/warehouse/js/1.html#pop"}},[t._v("pop实现")])],1)]),t._v(" "),a("p",[t._v("pop和push就可以用来模拟栈的入栈和出栈")]),t._v(" "),a("h3",{attrs:{id:"_4-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2"}},[t._v("#")]),t._v(" 4.2")]),t._v(" "),a("p",[t._v("现在，数组输出的数是4 到 12，数组的长度是 17。\n3.4.2 从数组开头删除元素\n如果要移除数组里的第一个元素，可以用下面的代码。\nfor (let i = 0; i < numbers.length; i++) {\nnumbers[i] = numbers[i + 1];\n}\n下图呈现了这段代码的执行过程。\n我们把数组里所有的元素都左移了一位，但数组的长度依然是 17，这意味着数组中有额外\n50 第 3 章 数组\n的一个元素（值是 undefined）。在最后一次循环里，i+1 引用了数组里还未初始化的一个位置。\n在 Java、C/C+或 C#等一些语言里，这样写可能会抛出异常，因此不得不在 numbers.length- 1\n处停止循环。\n可以看到，我们只是把数组第一位的值用第二位覆盖了，并没有删除元素（因为数组的长度\n和之前还是一样的，并且多了一个未定义元素）。\n要从数组中移除这个值，还可以创建一个包含刚才所讨论逻辑的方法，叫作 removeFirst￾Position。但是，要真正从数组中移除这个元素，我们需要创建一个新的数组，将所有不是\nundefined 的值从原来的数组复制到新的数组中，并且将这个新的数组赋值给我们的数组。要\n完成这项工作，也可以像下面这样创建一个 reIndex 方法。\nArray.prototype.reIndex = function(myArray) {\nconst newArray = [];\nfor(let i = 0; i < myArray.length; i++ ) {\nif (myArray[i] !== undefined) {\n// console.log(myArray[i]);\nnewArray.push(myArray[i]);\n}\n}\nreturn newArray;\n}\n// 手动移除第一个元素并重新排序\nArray.prototype.removeFirstPosition = function() {\nfor (let i = 0; i < this.length; i++) {\nthis[i] = this[i + 1];\n}\nreturn this.reIndex(this);\n};\nnumbers = numbers.removeFirstPosition();\n上面的代码只应该用作示范，不应该在真实项目中使用。要从数组开头删除元素，\n我们应该始终使用 shift 方法，这将在下一节中展示。\n使用 shift 方法\n要删除数组的第一个元素，可以用 shift 方法实现。\nnumbers.shift();\n假如本来数组中的值是从4 到 12，长度为 17。执行了上述代码后，数组就只有3 到 12 了，\n长度也会减小到 16。\n通过 shift 和 unshift 方法，我们就能用数组模拟基本的队列数据结构，第 5\n章会讲到。\n3.6 二维和多维数组 51\n1\n2\n3\n4\n5\n5\n6\n7\n8\n9\n0\n1\n2\n3\n4\n3.5 在任意位置添加或删除元素\n目前为止，我们已经学习了如何添加元素到数组的开头或末尾，以及怎样删除数组开头和结\n尾位置上的元素。那么如何在数组中的任意位置上删除或添加元素呢？\n我们可以使用 splice 方法，简单地通过指定位置/索引，就可以删除相应位置上指定数量\n的元素。\nnumbers.splice(5,3);\n这行代码删除了从数组索引 5 开始的 3 个元素。这就意味着 numbers[5]、numbers[6]和\nnumbers[7]从数组中删除了。现在数组里的值变成了3、2、1、0、1、5、6、7、8、9、10、\n11 和 12（2、3、4 已经被移除）。\n对于 JavaScript 数组和对象，我们还可以用 delete 运算符删除数组中的元素，\n例如 delete numbers[0]。然而，数组位置 0 的值会变成 undefined，也就\n是说，以上操作等同于 numbers[0] = undefined。因此，我们应该始终使用\nsplice、pop 或 shift（马上就会学到）方法来删除数组元素。\n现在，我们想把数 2、3、4 插入数组里，放到之前删除元素的位置上，可以再次使用 splice\n方法。\nnumbers.splice(5, 0, 2, 3, 4);\nsplice 方法接收的第一个参数，表示想要删除或插入的元素的索引值。第二个参数是删除\n元素的个数（这个例子里，我们的目的不是删除元素，所以传入 0）。第三个参数往后，就是要\n添加到数组里的值（元素 2、3、4）。输出会发现值又变成了从3 到 12。\n最后，执行以下这行代码。\nnumbers.splice(5, 3, 2, 3, 4);\n输出的值是从3 到 12。原因在于，我们从索引 5 开始删除了 3 个元素，但也从索引 5 开始\n添加了元素 2、3、4。")]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=r.exports}}]);
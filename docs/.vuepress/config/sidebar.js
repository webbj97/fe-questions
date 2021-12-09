module.exports = {
    "/warehouse/": [
        {
            title: "数组", // 必要的
            children: [
                "/warehouse/js/array/chunk",
                "/warehouse/js/array/concat",
                "/warehouse/js/array/flattenDepth",
                "/warehouse/js/array/pop",
                "/warehouse/js/array/push",
                "/warehouse/js/array/remove",
                "/warehouse/js/array/reverse",
            ],
        },
        {
            title: "集合（遍历）", // 必要的
            children: [
                "/warehouse/js/collection/every",
                "/warehouse/js/collection/filter",
                "/warehouse/js/collection/find",
                "/warehouse/js/collection/includes",
                "/warehouse/js/collection/some",
            ],
        },
        {
            title: "对象", // 必要的
            children: [
                "/warehouse/js/object/clonedeep",
            ],
        },
        {
            title: "函数", // 必要的
            children: [
                "/warehouse/js/function/apply",
                "/warehouse/js/function/bind",
                "/warehouse/js/function/call",
                "/warehouse/js/function/compose",
                "/warehouse/js/function/curry",
                "/warehouse/js/function/debounce",
                "/warehouse/js/function/pipe",
                "/warehouse/js/function/sleep",
                "/warehouse/js/function/throttle",
            ],
        },
        {
            title: "字符串", // 必要的
            children: [
                "/warehouse/js/string/split",
                "/warehouse/js/string/reverse",
            ],
        },
        {
            title: "TypeScript", // 必要的
            sidebarDepth: 3,
            children: [
                "/warehouse/ts/1",
            ],
        },
        {
            title: "实用技巧", // 必要的
            children: [
                "/warehouse/js/string/split",
            ],
        },
        {
            title: "网络", // 必要的
            children: ["/warehouse/network/1"],
        },
    ],
    "/css/": [
        {
            title: "经典布局场景", // 必要的
            children: [
                "/css/layout/1", // 数组
            ],
        },
        {
            title: "动画", // 必要的
            children: [
                "/css/animation/1", // 数组
            ],
        },
        {
            title: "过渡", // 必要的
            children: [
                "/css/transition/1", // 数组
            ],
        },
    ],
    "/algorithm/": [
        {
            title: "数据结构", // 必要的
            children: [
                "/algorithm/knows/1.md", // 数组
                "/algorithm/knows/2.md", // 栈
                "/algorithm/knows/3.md", // 队列
                "/algorithm/knows/4.md", // 链表
                "/algorithm/knows/5.md", // 集合
                "/algorithm/knows/6.md", // 树
            ],
        },
        {
            title: "剑指offer", // 必要的
            children: [
                "/algorithm/leetcode/offer03",
                "/algorithm/leetcode/offer04",
                "/algorithm/leetcode/offer05",
                "/algorithm/leetcode/offer06",
                "/algorithm/leetcode/offer09",
                "/algorithm/leetcode/offer11",
                "/algorithm/leetcode/offer21",
                "/algorithm/leetcode/offer24",
                "/algorithm/leetcode/offer27",
                "/algorithm/leetcode/offer29",
                "/algorithm/leetcode/offer30",
                "/algorithm/leetcode/offer35",
                "/algorithm/leetcode/offer39",
                "/algorithm/leetcode/offer45",
                "/algorithm/leetcode/offer50",
                "/algorithm/leetcode/offer53-1",
                "/algorithm/leetcode/offer53-2",
                "/algorithm/leetcode/offer57",
                "/algorithm/leetcode/offer58-1",
                "/algorithm/leetcode/offer58",
                "/algorithm/leetcode/offer67",
            ],
        },
        {
            title: "LeetCode题库", // 必要的
            children: [
                "/algorithm/leetcode/62", // 不同路径
                "/algorithm/leetcode/63", // 不同路径II
                // "/algorithm/leetcode/240", // 不同路径
                "/algorithm/leetcode/509", // 斐波那契
                "/algorithm/leetcode/offer03", // 斐波那契
                "/algorithm/leetcode/offer04", // 斐波那契
                "/algorithm/leetcode/offer05", // 斐波那契
                "/algorithm/leetcode/offer06", // 斐波那契
            ]
        },
    ]
}
module.exports = {
    "/warehouse/": [{
            title: "JavaScript", // 必要的
            children: [
                "/warehouse/js/1",
                "/warehouse/js/2",
                "/warehouse/js/3",
                "/warehouse/js/4",
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
            title: "Css", // 必要的
            sidebarDepth: 3,
            children: [
                "/warehouse/css/1",
                "/warehouse/css/2"
            ],
        },
        {
            title: "网络", // 必要的
            children: ["/warehouse/network/1"],
        },
    ],
    "/algorithm/": [
        {
            title: "算法思想", // 必要的
            children: [
                "/algorithm/knows/1"
            ],
        },
        {
            title: "剑指offer", // 必要的
            children: [
                "/algorithm/offer/1",
            ],
        },
        {
            title: "LeetCode题库", // 必要的
            children: require('./leetcode')
        },
    ]
}
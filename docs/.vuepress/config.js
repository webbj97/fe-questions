module.exports = {
    title: "前端闭关",
    description: "闭关，慢慢来",
    base: "/fe-questions/", // github仓库名
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }]
    ],
    theme: 'antdocs', // ant风格主题
    plugins: [
        "@vuepress/back-to-top",
        "vuepress-plugin-code-copy",
        'demo-container',
    ],
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "题库", link: "/warehouse/" },
        ],
        repo: "https://github.com/webbj97/fe-questions", // github仓库地址
        lastUpdated: '上次更新于', // 最近更新
        ads: {
            style: 2,
            speed: 3000,
            items: [{
                text: '更多前端知识点',
                image: 'https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/hlg-ui/163046294481790/11.jpeg',
                link: '',
            }, ]
        },
        footer: {
            createYear: 2021,
            copyrightInfo: 'DokiMod Team | 本网站是粉丝作品，与 Team Salvato 无关 | hosted by <a href="https://vercel.com">Vercel</a> | powered by VuePress',
        },
        sidebar: {
            "/warehouse/": [{
                    title: "JavaScript", // 必要的
                    children: [
                        "/warehouse/js/1",
                        "/warehouse/js/2",
                        "/warehouse/js/3",
                    ],
                },
                {
                    title: "Css", // 必要的
                    sidebarDepth: 3,
                    children: ["/warehouse/css/1"],
                },
                {
                    title: "网络", // 必要的
                    children: ["/warehouse/network/1"],
                },
                {
                    title: "算法", // 必要的
                    children: ["/warehouse/sf/1"],
                },
            ],
        },
    },
};
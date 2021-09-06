module.exports = {
    title: "前端闭关",
    description: "闭关，慢慢来",
    base: "/fe-questions/", // github仓库名
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }]
    ],
    theme: 'antdocs',
    plugins: [
        "@vuepress/back-to-top",
        "vuepress-plugin-code-copy",
        'demo-container',
    ],
    themeConfig: {
        repo: "https://github.com/webbj97/fe-questions",
        lastUpdated: '上次更新于',
        nav: require('./config/nav'),
        sidebar: require('./config/sidebar'),
        // ads: {
        //     style: 2,
        //     speed: 3000,
        //     items: [{
        //         text: '更多前端知识点',
        //         image: 'https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/hlg-ui/163046294481790/11.jpeg',
        //         link: '',
        //     }, ]
        // },
    },
};
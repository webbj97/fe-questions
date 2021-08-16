module.exports = {
    title: '前端闭关',
    description: 'lalala',
    base: '/fe-questions/', // github仓库名
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    plugins: [
        '@vuepress/back-to-top',
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '题库', link: '/warehouse/' },
            { text: 'GitHub', link: 'https://github.com/webbj97/Questions' },
        ],
        markdown: {
            lineNumbers: true // 代码块显示行号
        },
        sidebar: {
            '/warehouse/': [{
                    title: 'Js概念', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2, // 可选的, 默认值是 1
                    children: [
                        '/warehouse/js/1',
                    ]
                },
                {
                    title: '网络', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2, // 可选的, 默认值是 1
                    children: [
                        '/warehouse/network/1',
                    ]
                },
                {
                    title: '算法', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2, // 可选的, 默认值是 1
                    children: [
                        '/warehouse/sf/1',
                    ]
                },
            ],
        }
    }
}
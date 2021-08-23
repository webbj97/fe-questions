import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'


export default defineUserConfig<DefaultThemeOptions>({
    title: '前端闭关',
    description: 'lalala',
    base: '/fe-questions/', // github仓库名
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    plugins: [
        '@vuepress/back-to-top',
        'vuepress-plugin-code-copy'
    ],
    themeConfig: {
        navbar: [
            { text: 'Home', link: '/' },
            { text: '题库', link: '/warehouse/' },
        ],
        repo: 'https://github.com/webbj97/fe-questions', // github仓库地址
        lastUpdated: true, // 最近更新
        editLink: false,
        markdown: {
            lineNumbers: true // 代码块显示行号
        },
        sidebar: {
            '/warehouse/': [{
                    text: 'Js概念', // 必要的
                    children: [
                        '/warehouse/js/1',
                        '/warehouse/js/2',
                        '/warehouse/js/3',
                        '/warehouse/js/4',
                    ]
                },
                {
                    text: '网络', // 必要的
                    children: [
                        '/warehouse/network/1',
                    ]
                },
                {
                    text: '算法', // 必要的
                    children: [
                        '/warehouse/sf/1',
                    ]
                },
            ],
        }
    }
})
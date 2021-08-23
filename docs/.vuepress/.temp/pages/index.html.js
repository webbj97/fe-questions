export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/logo.gif",
    "actionText": "快速开始",
    "actionLink": "/questions/",
    "features": [
      {
        "title": "题库",
        "details": "这里有着前端基础——JavaScript最全面的基础总结，帮助你打牢前端基础！"
      },
      {
        "title": "待新增",
        "details": "啦啦啦"
      },
      {
        "title": "待新增",
        "details": "啦啦啦"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present 余光"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1629106883000,
    "contributors": [
      {
        "name": "yuguang",
        "email": "yuguang@gaoding.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

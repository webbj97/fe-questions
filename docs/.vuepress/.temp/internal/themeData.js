export const themeData = {
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "题库",
      "link": "/warehouse/"
    }
  ],
  "repo": "https://github.com/webbj97/fe-questions",
  "lastUpdated": true,
  "editLink": false,
  "markdown": {
    "lineNumbers": true
  },
  "sidebar": {
    "/warehouse/": [
      {
        "text": "JavaScript",
        "children": [
          "/warehouse/js/1",
          "/warehouse/js/2",
          "/warehouse/js/3",
          "/warehouse/js/4"
        ]
      },
      {
        "text": "Css",
        "children": [
          "/warehouse/css/1"
        ]
      },
      {
        "text": "网络",
        "children": [
          "/warehouse/network/1"
        ]
      },
      {
        "text": "算法",
        "children": [
          "/warehouse/sf/1"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-650e6d85","/warehouse/","",["/warehouse/index.html","/warehouse/README.md"]],
  ["v-95c6a22e","/warehouse/js/1.html","高频实现",["/warehouse/js/1","/warehouse/js/1.md"]],
  ["v-925cf0f0","/warehouse/js/2.html","代码分析题",["/warehouse/js/2","/warehouse/js/2.md"]],
  ["v-8ef33fb2","/warehouse/js/3.html","知识点概念",["/warehouse/js/3","/warehouse/js/3.md"]],
  ["v-8b898e74","/warehouse/js/4.html","手撕代码",["/warehouse/js/4","/warehouse/js/4.md"]],
  ["v-58be21e4","/warehouse/network/1.html","网络",["/warehouse/network/1","/warehouse/network/1.md"]],
  ["v-b5d562c2","/warehouse/sf/1.html","算法思想",["/warehouse/sf/1","/warehouse/sf/1.md"]],
  ["v-7fc904f3","/warehouse/ts/1.html","Ts类型体操",["/warehouse/ts/1","/warehouse/ts/1.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

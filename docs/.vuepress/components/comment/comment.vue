<template>
    <div class="gitalk-container">
        <div id="gitalk-container"></div>
    </div>
</template>
<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
export default {
    name: "comment",
    data() {
        return {};
    },
    mounted() {
        const commentConfig = {
            clientID: "459a354850c29b3684c5",
            clientSecret: "9508357725af6811040e5675ac2662e21010c3ab",
            repo: "fe-questions",
            owner: "webbj97",
            // 这里接受一个数组，可以添加多个管理员
            admin: ["webbj97"],
            // id 用于当前页面的唯一标识，一般来讲 pathname 足够了，
            // 但是如果你的 pathname 超过 50 个字符，GitHub 将不会成功创建 issue，此情况可以考虑给每个页面生成 hash 值的方法.
            id: location.pathname.subStr(0, 50),
            distractionFreeMode: false,
        };
        const gitalk = new Gitalk(commentConfig);
        gitalk.render("gitalk-container");
    },
};
</script>
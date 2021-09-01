<!-- 组件说明 -->
<template>
    <div class="home-readme">
        <h1>前端闭关</h1>
        <a-button type="primary" size="large" @click="start">
            快速开始 <a-icon type="right" />
        </a-button>
    </div>
</template>

<script>
import Button from "ant-design-vue/lib/button";
import "ant-design-vue/lib/button/style/css";

export default {
    name: "Home",
    components: {
        "a-button": Button,
    },
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {
        start() {
            console.log("11:", 11);
            window.location.href = "/fe-questions/warehouse/";
        },
    },
};
</script>

<style>
.home-readme {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.home-readme > h1 {
    line-height: 120px;
    font-size: 60px;
}
</style>
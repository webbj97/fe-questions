<!-- 组件说明 -->
<template>
    <div class="home-readme">
        <div class="home-readme__bg">
            <video
                class="home-readme__video"
                :src="$withBase('./logo.mp4')"
                autoplay="autoplay"
                loop="loop"
                muted
            ></video>
        </div>
        <div class="home-readme__title">前端修炼闭关</div>
        <a-button
            type="link"
            size="large"
            @click="start"
            class="home-readme__btn"
        >
            点此开始
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
            window.location.href = "/fe-questions/warehouse/";
        },
    },
};
</script>

<style lang="sass">
.theme-antdocs-content

.home-readme
    position: relative
    display: flex
    flex-direction: column
    align-items: center
    &__bg
        width: 100%
        height: 100vh
        overflow: hidden
    &__video
        position: fixed
        right: 0px
        bottom: 0px
        min-width: 100%
        min-height: 100%
        height: auto
        width: auto
    &__title
        position: absolute
        top: 0
        right: 0
        font-size: 36px
        line-height: 50px
        font-weight: 500
        color: #ffffff
    &__btn
        position: absolute
        left: 50%
        top: 50%
        color: #fff
        font-weight: 500
        font-size: 24px
        transform: translate(-50%, -50%)
        animation-name: transparency
        animation-duration: 3s
        animation-iteration-count: infinite
@keyframes transparency
    0%
        opacity: 1
    50%
        opacity: 0.3
    100%
        opacity: 1
</style>
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
    <h1 class="home-readme__title" data-shadow='前端修炼闭关'>前端修炼闭关</h1>
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
  mounted() {
  },
  methods: {
    start() {
      window.location.href = "/fe-questions/warehouse/";
    },
  },
};
</script>

<style lang="sass">
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
    top: 100px
    right: 100px
    text-align: center
    font-size: 50px
    line-height: 50px
    font-weight: 500
    color: #ffffff
    opacity: 0.9
    text-shadow: 1px -1px 0 #000, 1px -1px 0 #000

  &__btn
    position: absolute
    left: 50%
    top: 50%
    color: #fff
    font-weight: 500
    font-size: 24px
    transform: translate(-50%, -50%)
    animation: tiktok 0.7s linear infinite
//animation-name: transparency
//animation-duration: 3s
//animation-iteration-count: infinite

@keyframes transparency
  0%
    opacity: 1
  50%
    opacity: 0.3
  100%
    opacity: 1

@keyframes tiktok
  0%, 100%
    text-shadow: -1px -1px 0 #0ff, 1px 1px 0 #f00
  25%
    text-shadow: 1px 1px 0 #0ff, -1px -1px 0 #f00
  50%
    text-shadow: 1px -1px 0 #0ff, 1px -1px 0 #f00
  75%
    text-shadow: -1px 1px 0 #0ff, -1px 1px 0 #f00

</style>

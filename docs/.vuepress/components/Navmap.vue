<!-- 组件说明 -->
<template>
  <div class="readme">
    <div class="readme__items" v-for="group in pages" :key="group.key">
      <h4 class="title">{{ group.title }}</h4>
      <div class="contents">
        <Button
          v-for="item in group.newH"
          :style="{ background: item.bgColor }"
          @click="onClick(item)"
          class="btn"
        >
          {{ item.title }}
        </Button>
      </div>
    </div>
  </div>
</template>


<script>
import {Button, PageHeader} from "ant-design-vue";

const presetPalettes = [
  // "#ff4d4f", // red-5
  // "#ff7a45", // orange-5
  // "#ffc53d",
  // "#ffec3d",
  // "#bae637", // lime-5
  // "#73d13d",
  // "#36cfc9",
  // "#40a9ff",
  // "#597ef7", // beekblue-5
  // "#9254de",

  "#d0bfff", // red-5
  "#A5DDFA", // orange-5
  "#AEF5BA",
  "#f6f4b1",
  "#FFE9CC", // lime-5
  "#FFBFB7",
  "#99dfd8",
  "#ffffca",
  "#f1a677",
  "#9EDBFF"
];

export default {
  name: "Navmap",
  data() {
    return {
      pages: [],
    };
  },
  components: {
    Button,
    PageHeader,
  },
  computed: {
    scope() {
      const {$site: scope} = this;
      return scope;
    },
  },
  mounted() {
    this.initSite();
  },
  methods: {
    initSite() {
      const {scope} = this;
      // 处理数据结构
      const pages = scope.pages
        .filter((page) => page.title && page.headers)
        .map((group) => {
          group.newH = group.headers
            .filter((v) => v.level === 2)
            .map((v) => {
              const i = Math.floor(Math.random() * 10);
              v.bgColor = presetPalettes[i];
              v.newUrl = "/fe-questions" + group.path + "#" + v.slug;
              return v;
            });
          return group;
        }).sort();
      this.pages = pages;
      console.log(this.pages);
    },
    onClick({newUrl}) {
      window.open(newUrl)
    }
  },
};
</script>

<style lang='scss'>
.readme {
  padding-top: 40px;

  &__items {
    margin-bottom: 20px;

    .title {
      margin-bottom: 10px;
    }

    .contents {
      display: flex;
      flex-wrap: wrap;

      .btn {
        margin-right: 20px;
        margin-bottom: 20px;
        border: none;
        color: #000;
      }
    }
  }
}
</style>
<!-- 组件说明 -->
<template>
    <div class="readme">
        <div class="readme__items" v-for="item in pages" :key="item.key">
            <template v-if="!item.heads || item.heads.length === 0">
                <a
                    :href="item.path"
                >
                    {{ item.title }}
                </a>
            </template>
            <template v-else>
                <h4 class="title">{{ item.title }}</h4>
            </template>
            <div class="contents" v-if="item.heads && item.heads.length">
                <Button
                    v-for="(item, i) in item.heads"
                    :key="i"
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
import { Button, PageHeader } from "ant-design-vue";
const { presetPalettes } = require("./utils/index");

export default {
    name: "Navmap",
    data() {
        return {
            pages: [],
        };
    },
    props: {
        text:{
            type: String,
            default: ''
        }
    },
    components: {
        Button,
        PageHeader,
    },
    computed: {
        scope() {
            const { $site: scope } = this;
            return scope;
        },
        page() {
            const { $page: page } = this;
            return page;
        },
    },
    mounted() {
        this.initSite();
    },
    methods: {
        // 分模块加载导航
        initSite() {
            const { scope, page, text } = this;
            const { regularPath } = page; // 当前主模块
            const Reg = text || regularPath; // 指定分类
            const pages = scope.pages
                .filter(
                    (v) =>
                        v.title &&
                        v.regularPath.indexOf(Reg) !== -1 &&
                        v.regularPath !== Reg
                )
                .map((item) => {
                    item.heads = [...(item.headers || [])]
                        .filter((v) => v.level === 2 && v.title)
                        .map((v) => {
                            const i = Math.floor(Math.random() * 10);
                            v.bgColor = presetPalettes[i];
                            v.newUrl =
                                "/fe-questions" + item.path + "#" + v.slug;
                            return v;
                        });
                    return item;
                })
                .sort();

            this.pages = pages;
        },
        onClick({ newUrl }) {
            window.open(newUrl);
        },
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
                &:hover{

                }
            }
        }
    }
}
</style>
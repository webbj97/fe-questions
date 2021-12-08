<!-- 组件说明 -->
<template>
    <div class="readme">
        <div class="readme__items" v-for="item in list" :key="item.key">
            <h3 class="title">{{ item.title }}</h3>
            <div class="contents" v-if="item.child">
                <Button
                    v-for="v in item.child"
                    :key="v.key"
                    :style="{ background: v.bgColor }"
                    @click="onClick(v)"
                    class="btn"
                >
                    {{ v.title }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
import { Button, PageHeader } from "ant-design-vue";
const { presetPalettes } = require("./utils/index");
const sidebar = require("../config/sidebar");

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
            const { $site: scope } = this;
            return scope;
        },
        page() {
            const { $page: page } = this;
            return page;
        },
        list() {
            const { pages = [] } = this.scope;
            const { regularPath } = this.page; // 当前主模块
            const curList = pages.filter(
                (v) => v.regularPath.indexOf(regularPath) !== -1
            );
            const curNav = sidebar[regularPath] || [];

            const result = curNav.map((group) => {
                const { children } = group;
                const child = children.map((route, index) => {
                    const data = curList.find(
                        (v) => v.path === route + ".html"
                    );
                    return {
                        url: route,
                        bgColor: presetPalettes[index],
                        ...data,
                    };
                });
                return {
                    ...group,
                    child,
                };
            });
            return result;
        },
    },
    mounted() {},
    methods: {
        onClick({ path }) {
            location.href = path;
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
                margin-bottom: 15px;
                border: none;
                color: #000;
                transition: all 0.3;
                &:hover {
                    transform: scale(1.1);
                    box-shadow: 2px 2px 2px #ccc;
                }
            }
        }
    }
}
</style>
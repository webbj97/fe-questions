<!-- 组件说明 -->
<template>
    <div class="page-level-nav">
        <div v-for="item in navList" class="nav">
            <a :href="item.url">{{ item.title }}</a>
        </div>
    </div>
</template>

<script>
//import x from ''
export default {
    components: {},
    data() {
        return {
            navList: [],
        };
    },
    computed: {
        pathname() {
            const { pathname } = location;
            return pathname;
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const wordClassifyRE = /(?:^|[-_])(\w)/g;

            const { $page: scope, pathname } = this;
            const { headers = [] } = scope;

            this.navList = headers.map((item) => {
                const t = item.title;
                const hash = t
                    .replace(/\w/g, (i) => i.toLowerCase())
                    .replace(/\s/g, "");
                item.url = `${pathname}#${hash}`;
                return item;
            }).filter(item => item.title.indexOf('导航') === -1);
        },
    },
};
</script>

<style>
.page-level-nav {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}
.page-level-nav > .nav {
    width: 100px;
    line-height: 20px;
    margin: 10px;
}
</style>
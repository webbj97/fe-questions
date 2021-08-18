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

            this.navList = headers
                .map((item) => {
                    const t = item.title;
                    const hash = t
                        .replace(/\w/g, (i) => i.toLowerCase())
                        .replace(/\s/g, "");
                    item.url = `${pathname}#${hash}`;
                    return item;
                })
                .filter((item) => item.title.indexOf("导航") === -1);
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
    position: relative;
    margin: 10px;
    width: 152px;
    height: 40px;
    background: #9c53fc;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    transition: all .3s;
}
.nav a {
    font-size: 16px;
    color: #fff !important;
    text-decoration: none !important;
}
.nav:hover {
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
}
</style>
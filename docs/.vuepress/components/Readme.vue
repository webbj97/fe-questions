<!-- 组件说明 -->
<template>
    <div class="readme">
        <div class="readme__items" v-for="group in pages" :key="group.key">
            <h3 class="title">{{ group.title }}</h3>
            <div class="contents">
                <a v-for="item in group.newH" :href="item.url">
                    {{ item.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Readme",
    data() {
        return {
            pages: [],
        };
    },
    computed: {},
    mounted() {
        this.initSite();
    },
    methods: {
        initSite() {
            const { $site: scope } = this;
            const pages = scope.pages
                .filter((page) => page.title && page.headers)
                .map((page) => {
                    const headers = page.headers.map((item) => {
                        item.url = '/fe-questions' +page.path + "#" + item.slug;
                        return item;
                    });
                    page.newH = headers.filter((item) => item.level === 2);
                    return page;
                });
            this.pages = pages;
            console.log("pages:", pages);
        },
    },
};
</script>

<style lang='sass'>
</style>
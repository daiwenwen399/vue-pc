<template>
    <div>
        <ClassifiedNav />
        <Banner />
        <RecomToday />
        <Ranking />
        <Like />
        <Content />
        <Content />
        <Brand />
    </div>
</template>

<script>
import ClassifiedNav from "@comps/ClassifiedNav";
import Banner from "./Banner";
import RecomToday from "./RecomToday";
import Ranking from "./Ranking";
import Like from "./Like";
import Content from "./Content";
import Brand from "./Brand";

export default {
    name: "Home",
    components: {
        ClassifiedNav,
        Banner,
        RecomToday,
        Ranking,
        Like,
        Content,
        Brand,
    },
};
</script>

<style lang="less" scoped>
</style>

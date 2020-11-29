<template>
    <div>
        <ClassifiedNav />
        <Banner />
        <RecomToday />
        <Ranking />
        <Like />
    </div>
</template>

<script>
import ClassifiedNav from "./ClassifiedNav";
import Banner from "./Banner";
import RecomToday from "./RecomToday";
import Ranking from "./Ranking";
import Like from "./Like";

export default {
    name: "Home",
    components: {
        ClassifiedNav,
        Banner,
        RecomToday,
        Ranking,
        Like,
    },
};
</script>

<style lang="less" scoped>
</style>

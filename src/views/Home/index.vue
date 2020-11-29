<template>
    <div>
        <ClassifiedNav />
        <Banner />
        <RecomToday />
    </div>
</template>

<script>
import ClassifiedNav from "./ClassifiedNav";
import Banner from "./Banner";
import RecomToday from "./RecomToday";

export default {
    name: "Home",
    components: {
        ClassifiedNav,
        Banner,
        RecomToday,
    },
};
</script>

<style lang="less" scoped>
</style>

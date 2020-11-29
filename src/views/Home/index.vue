<template>
    <div>
        <ClassifiedNav />
        <Banner />
    </div>
</template>

<script>
import ClassifiedNav from "./ClassifiedNav";
import Banner from "./Banner";

export default {
    name: "Home",
    components: {
        ClassifiedNav,
        Banner,
    },
};
</script>

<style lang="less" scoped>
</style>

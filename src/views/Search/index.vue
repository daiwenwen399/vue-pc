<template>
    <div>
        <ClassifiedNav />
        <div id="search">
            <AllNav />
        </div>
    </div>
</template>

<script>
import AllNav from "@comps/AllNav";
import ClassifiedNav from "../Home/ClassifiedNav";

export default {
    name: "Search",
    components: {
        ClassifiedNav,
        AllNav,
    },
};
</script>

<style lang="less" scoped>
#search {
    width: 1200px;
    margin: 0 auto;
}
</style>

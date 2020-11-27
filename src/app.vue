<template>
    <div>
        <Header />
        <!-- 中间根据路由显示不同的组件 -->
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
</style>
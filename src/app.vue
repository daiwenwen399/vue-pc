<template>
    <div>
        <Header />
        <router-view></router-view>
        <!-- 判断在登录和注册的时候底部不显示 -->
        <!-- <Footer v-if="$route.path !== '/login' && $route.path !== '/register'"/> -->
        <Footer v-if="!$route.meta.isFooterHide" />
    </div>
</template>

<script>
import Header from "@comps/Header";
import Footer from "@comps/Footer";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="less" scoped>
// lang="less" 当前可以使用less写样式
// scoped 作用域样式代码（当前样式只对当前组件生效，其他组件没有效果）
/*
  当你添加 scoped 属性
    给当前组件所有结构添加一个唯一的属性 data-v-xxx
    所有元素选择器都会加上选择这个属性
      之前: .header-aaa { }
      之后：.header-aaa[data-v-xxx] {}
    因为只有当前组件具有这个属性 data-v-xxx
    所以样式只会对当前组件生效，其他组件不会影响
*/
</style>

<template>
    <!-- 商城头部 -->
    <header>
        <!-- 商城顶部区域 -->
        <div id="header_top">
            <div class="top">
                <div class="top_title">
                    <strong>尚品汇欢迎您！</strong>
                    <p v-if="userName">
                        <span>{{ userName }}</span>
                        <button @click="signOut">退出</button>
                    </p>
                    <p v-else>
                        <span>请</span>
                        <router-link to="/login">登录</router-link>
                        <router-link to="/register">免费注册</router-link>
                    </p>
                </div>
                <nav class="top_nav">
                    <a href="javascript:;">我的订单</a>
                    <router-link to="/shopCart">我的购物车</router-link>
                    <a href="javascript:;">我的尚品汇</a>
                    <a href="javascript:;">尚品汇会员</a>
                    <a href="javascript:;">企业采购</a>
                    <a href="javascript:;">关注尚品汇</a>
                    <a href="javascript:;">合作招聘</a>
                    <a href="javascript:;">商家后台</a>
                </nav>
            </div>
        </div>
        <!-- 商城logo和搜索栏区域 -->
        <div id="header_main">
            <div class="header_logo">
                <router-link to="/">
                    <img src="./images/Logo.png" alt="尚品汇" />
                </router-link>
            </div>
            <form action="javascript:;" method="POST" class="header_search">
                <input type="text" name="searchname" v-model="searchContent" />
                <button type="submit" @click="search">搜索</button>
            </form>
        </div>
    </header>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Header",
    data() {
        return {
            searchContent: "",
        };
    },
    computed: {
        ...mapState({
            userName: (state) => state.user.name,
        }),
    },
    methods: {
        search() {
            const { searchContent } = this;
            /**
             *   方式使用字符串方式进行路由拼接
             *
                // 获得搜索的数据，判断是否要增加params参数
                const params = this.searchContent ? `/${this.searchContent}` : "";
                // 生成跳转的链接
                const location = "/search" + params;
                // 编程式导航：原因将来要做搜索功能（要发送请求）
                this.$router.push(location);
            */

            /**
            *   方式二：使用对象方式进行拼接
                {
                    path: 路由路径,
                    query: {} 查询字符串参数
                }
                {
                    name: 命名路由名称,
                    params: {} params参数
                    query: {} 查询字符串参数
                }
            */

            const location = {
                name: "search",
                // query: {
                //     name: "chen",
                // },
            };
            if (searchContent) {
                location.params = {
                    searchContent,
                };
            }

            // 添加query参数
            const { categoryName } = this.$route.query;
            if (categoryName) {
                location.query = this.$route.query;
            }

            // 如果当前路径是搜索页面就用replace
            if (this.$route.name === "search") {
                this.$router.replace(location);
            } else {
                this.$router.push(location);
            }
        },
        signOut() {
            this.$store.dispatch("loginOut");
        },
    },
    mounted() {
        this.$bus.$on("delSearchContent", () => {
            this.searchContent = "";
        });
    },
};
</script>

<style lang="less" scoped>
@mainColor: #e1251b;

// 商城顶部
#header_top {
    width: 100%;
    height: 30px;
    min-width: 1200px;
    background-color: #eaeaea;
    .top {
        width: 1200px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .top_title {
        display: flex;
    }
    a {
        padding: 0 4px 0 8px;
    }
    a:link:hover {
        color: @mainColor;
    }
    a + a {
        border-left: 1px solid #b3aeae;
    }
}

#header_main {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    // 商城logo
    .header_logo {
        width: 175px;
        height: 56px;
        margin: 25px 45px;
    }
    // 商城头部搜索栏
    .header_search {
        margin-top: 35px;
        display: flex;
    }
    input {
        width: 490px;
        height: 32px;
        padding: 0 4px;
        box-sizing: border-box;
        border: 2px solid @mainColor;
        outline: none;
    }
    button {
        width: 68px;
        height: 32px;
        line-height: 32px;
        color: #fff;
        background-color: @mainColor;
        outline: none;
        border: none;
    }
}
</style>

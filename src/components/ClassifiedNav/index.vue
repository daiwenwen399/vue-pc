<template>
    <div id="classified_nav" @mouseleave="isSearchShow = false">
        <div class="container">
            <!-- 顶部导航 -->
            <div id="classified_topnav">
                <ul>
                    <li
                        class="classified_nav_all"
                        @mouseenter="isSearchShow = true"
                    >
                        全部商品分类
                    </li>
                    <li><a href="javascript:;">服装城</a></li>
                    <li><a href="javascript:;">美妆馆</a></li>
                    <li><a href="javascript:;">尚品汇超市</a></li>
                    <li><a href="javascript:;">全球购</a></li>
                    <li><a href="javascript:;">闪购</a></li>
                    <li><a href="javascript:;">团购</a></li>
                    <li><a href="javascript:;">有趣</a></li>
                    <li><a href="javascript:;">秒杀</a></li>
                </ul>
            </div>
            <!-- 全部商品导航区 -->
            <transition name="search">
                <div id="all_nav" v-show="isHomeShow || isSearchShow">
                    <ul class="all_menu" @click="goSearch">
                        <li
                            v-for="category in allNav"
                            :key="category.categoryId"
                        >
                            <!-- 一级分类名称 -->
                            <!-- 使用自定义属性的方法来传递参数 -->
                            <a
                                href="javascript:;"
                                :data-categoryName="category.categoryName"
                                :data-categoryId="category.categoryId"
                                :data-categoryType="1"
                                >{{ category.categoryName }}</a
                            >
                            <div class="all_submenu">
                                <dl
                                    class="div-after"
                                    v-for="child in category.categoryChild"
                                    :key="child.categoryId"
                                >
                                    <!-- 二级分类名称 -->
                                    <dt>
                                        <a
                                            href="javascript:;"
                                            :data-categoryName="
                                                child.categoryName
                                            "
                                            :data-categoryId="child.categoryId"
                                            :data-categoryType="2"
                                            >{{ child.categoryName }}</a
                                        >
                                    </dt>
                                    <!-- 三级分类名称 -->
                                    <dd>
                                        <em
                                            v-for="grandChild in child.categoryChild"
                                            :key="grandChild.categoryChild"
                                        >
                                            <a
                                                href="javascript:;"
                                                :data-categoryName="
                                                    grandChild.categoryName
                                                "
                                                :data-categoryId="
                                                    grandChild.categoryId
                                                "
                                                :data-categoryType="3"
                                                >{{
                                                    grandChild.categoryName
                                                }}</a
                                            ></em
                                        >
                                    </dd>
                                </dl>
                            </div>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "ClassifiedNav",
    data() {
        return {
            isHomeShow: this.$route.path === "/",
            isSearchShow: false,
        };
    },
    computed: {
        // ...mapState可以使用一个对象，对象中的数据，就会传递给组件
        // 对象中key就是组件能接受到的数据，value是一个函数，函数内部会调用得到值，调用时会将所有vuex数据传递进去，就是state
        ...mapState({
            allNav: (state) => state.home.allNav,
        }),
    },
    methods: {
        // 函数可以直接写，注意：将来action函数名称和mutation函数名称不要重复
        ...mapActions(["getAllNav"]),
        // 利用事件委托来绑定事件传递参数
        goSearch(e) {
            // 元素自定义属性对象
            const { categoryname, categoryid, categorytype } = e.target.dataset;
            // 判断是点击了a标签，才跳转
            if (!categoryname) return;

            const location = {
                name: "search",
                query: {
                    categoryName: categoryname,
                    [`category${categorytype}Id`]: categoryid,
                },
            };

            // 判断是否有params参数
            const { searchContent } = this.$route.params;

            if (searchContent) {
                location.params = { searchContent };
            }

            this.$router.push(location);
        },
    },
    mounted() {
        this.getAllNav();
    },
};
</script>

<style lang="less" scoped>
@mainColor: #e1251b;

#classified_nav {
    width: 100%;
    min-width: 1200px;
    border-bottom: 2px solid @mainColor;
    .container {
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }
}
#classified_topnav {
    ul {
        height: 46px;
        line-height: 46px;
        display: flex;
    }
    .classified_nav_all {
        width: 210px;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        background-color: #e1251b;
    }
    a {
        color: #333;
        font-size: 16px;
        padding: 0 22px;
    }
    a:hover {
        color: @mainColor;
    }
}

// 全部商品导航区
#all_nav {
    position: absolute;
    top: 48px;
    width: 210px;
    height: 459px;
    color: #333;
    background-color: #fafafa;
    &.search-enter {
        height: 0px;
    }
    &.search-enter-active {
        overflow: hidden;
        transition: height 0.5s;
    }
    ul {
        position: relative;
    }
    li {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        > a {
            color: #333;
            font-size: 14px;
        }
    }
    a:hover {
        color: #e1251b;
        text-decoration: underline;
    }
    // 隐藏导航区
    .all_submenu {
        width: 735px;
        background-color: #f7f7f7;
        border: 1px solid #ddd;
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 210px;
    }
    li:hover .all_submenu {
        display: block;
        z-index: 1;
    }
    dl {
        width: 90%;
        padding: 6px 0;
        margin-left: 5px;
        overflow: hidden;
    }
    dt {
        float: left;
        width: 66px;
        line-height: 22px;
        text-align: right;
        padding: 0 6px 0 0;
        font-weight: 700;
        a {
            color: #333;
        }
    }
    dd {
        float: left;
        width: 580px;
        em {
            float: left;
            height: 14px;
            line-height: 14px;
            font-size: 12px;
            padding: 0 8px;
            margin-top: 5px;
            border-left: 1px solid #ccc;
        }
        a {
            color: #666;
        }
    }
}
</style>

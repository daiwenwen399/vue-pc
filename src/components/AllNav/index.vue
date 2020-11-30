<template>
    <!-- 全部商品导航区 -->
    <div id="all_nav">
        <ul class="all_menu">
            <li v-for="category in allNav" :key="category.categoryId">
                <!-- 一级分类名称 -->
                <a href="javascript:;">{{ category.categoryName }}</a>
                <div class="all_submenu">
                    <dl
                        class="div-after"
                        v-for="child in category.categoryChild"
                        :key="child.categoryId"
                    >
                        <!-- 二级分类名称 -->
                        <dt>
                            <a href="javascript:;">{{ child.categoryName }}</a>
                        </dt>
                        <!-- 三级分类名称 -->
                        <dd>
                            <em
                                v-for="grandChild in child.categoryChild"
                                :key="grandChild.categoryChild"
                            >
                                <a href="javascript:;">{{
                                    grandChild.categoryName
                                }}</a></em
                            >
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "AllNav",
    computed: {
        ...mapState({
            allNav: (state) => state.home.allNav,
        }),
    },
    methods: {
        // 函数可以直接写，注意：将来action函数名称和mutation函数名称不要重复
        ...mapActions(["getAllNav"]),
    },
    mounted() {
        this.getAllNav();
    },
};
</script>

<style lang="less" scoped>
// 全部商品导航区
#all_nav {
    width: 210px;
    color: #333;
    ul {
        position: relative;
        height: 459px;
        background-color: #fafafa;
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

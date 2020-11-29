<template>
    <div id="classified_nav">
        <ul>
            <li class="classified_nav_all">全部商品分类</li>
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
</template>

<script>
export default {
    name: "ClassifiedNav",
};
</script>

<style lang="less" scoped>
@mainColor: #e1251b;

#classified_nav {
    width: 100%;
    min-width: 1200px;
    height: 46px;
    border-bottom: 2px solid @mainColor;
    ul {
        width: 1200px;
        height: 46px;
        line-height: 46px;
        margin: 0 auto;
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
</style>

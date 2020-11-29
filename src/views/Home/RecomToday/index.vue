<template>
    <!-- 今日推荐区 -->
    <div id="recom">
        <div class="recom_title">
            <img src="./images/clock.png" />
            <h3>今日推荐</h3>
        </div>
        <div class="recom_goods">
            <ul>
                <li><img src="./images/today01.png" /></li>
                <li><img src="./images/today02.png" /></li>
                <li><img src="./images/today03.png" /></li>
                <li><img src="./images/today04.png" /></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecomToday",
};
</script>

<style lang="less" scoped>
#recom {
    width: 1200px;
    margin: 10px auto;
    display: flex;
    .recom_title {
        width: 205px;
        height: 163px;
        text-align: center;
        background-color: #5c5251;
        img {
            margin-top: 30px;
        }
        h3 {
            line-height: 30px;
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            margin: 9px 0;
        }
    }
    ul {
        display: flex;
    }
    li:hover {
        opacity: 0.8;
        transition: linear 400ms;
    }
}
</style>

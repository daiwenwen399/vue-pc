<template>
    <!-- 商品排行区 -->
    <div id="ranking">
        <div class="ranking_title">
            <div class="ranking_title_first">
                <a href="javascript:;">
                    <span></span>
                    <h4>热卖排行</h4>
                </a>
            </div>
            <div>
                <a href="javascript:;">
                    <span></span>
                    <h4>特价排行</h4>
                </a>
            </div>
            <div>
                <a href="javascript:;">
                    <span></span>
                    <h4>新品排行</h4>
                </a>
            </div>
        </div>
        <!-- 商品排行商品区 -->
        <div class="ranking_goods">
            <div class="goods">
                <a href="javascript:;">
                    <img src="./images/1.jpg" />
                </a>
                <div>
                    <h3>
                        <a href="javascript:;"
                            >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                            移动联通电信4G手机</a
                        >
                    </h3>
                    <p>定金：￥100.00</p>
                </div>
            </div>
            <div class="goods">
                <a href="javascript:;">
                    <img src="./images/1.jpg" />
                </a>
                <div>
                    <h3>
                        <a href="javascript:;"
                            >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                            移动联通电信4G手机</a
                        >
                    </h3>
                    <p>定金：￥100.00</p>
                </div>
            </div>
            <div class="goods">
                <a href="javascript:;">
                    <img src="./images/1.jpg" />
                </a>
                <div>
                    <h3>
                        <a href="javascript:;"
                            >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                            移动联通电信4G手机</a
                        >
                    </h3>
                    <p>定金：￥100.00</p>
                </div>
            </div>
            <div class="goods">
                <a href="javascript:;">
                    <img src="./images/1.jpg" />
                </a>
                <div>
                    <h3>
                        <a href="javascript:;"
                            >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                            移动联通电信4G手机</a
                        >
                    </h3>
                    <p>定金：￥100.00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ranking",
};
</script>

<style lang="less" scoped>
#ranking {
    width: 1200px;
    margin: 0 auto;
    .ranking_title {
        width: 306px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        div {
            width: 64px;
            padding: 0 18px;
        }
        a {
            color: #999;
        }
        div:hover a {
            color: #e1251b;
        }
        span {
            width: 35px;
            height: 35px;
            display: inline-block;
            margin: 5px 0;
            background-image: url("./images/bg0.png");
        }
        h4 {
            margin: 5px 0;
            font-size: 16px;
        }
    }
    .ranking_title_first {
        color: #e1251b;
        span {
            background-position: -36px 0;
        }
    }
    // 商品排行商品区
    .ranking_goods {
        padding: 10px;
        display: flex;
        .goods {
            width: 269px;
            margin: 0 12px 10px;
            text-align: center;
            border: 1px solid #e1251b;
            div {
                text-align: left;
                background-color: #fafafa;
                padding-left: 10px;
            }
        }
        img {
            width: 200px;
            height: 200px;
            margin: 5px 0 18px;
        }
        h3 {
            font-size: 12px;
            line-height: 28px;
            a {
                color: #333;
            }
            a:hover {
                color: #e1251b;
            }
        }
        p {
            height: 35px;
            color: #e1251b;
            font-size: 20px;
            margin: 10px 0 0;
        }
    }
}
</style>

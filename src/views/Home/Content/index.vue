<template>
    <!-- 分类商品区 -->
    <div id="content">
        <div class="content_title">
            <h3>家用电器</h3>
            <ul>
                <li><a href="javascript:;">热门</a></li>
                <li><a href="javascript:;">大家电</a></li>
                <li><a href="javascript:;">生活电器</a></li>
                <li><a href="javascript:;">厨房电器</a></li>
                <li><a href="javascript:;">应季电器</a></li>
                <li><a href="javascript:;">空气/净水</a></li>
                <li><a href="javascript:;">高端电器</a></li>
            </ul>
        </div>
        <!-- 分类商品内容区 -->
        <div class="content_ad">
            <div class="content_ad_shop">
                <ul>
                    <li>节能补贴</li>
                    <li>4K电视</li>
                    <li>空气净化器</li>
                    <li>IH电饭煲</li>
                    <li>滚筒洗衣机</li>
                    <li>电热水器</li>
                </ul>
                <img src="./images/floor-1-1.png" />
            </div>
            <div class="content_banner">
                <ul>
                    <li><img src="./images/floor-1-b01.png" /></li>
                    <li><img src="./images/floor-1-b02.png" /></li>
                    <li><img src="./images/floor-1-b03.png" /></li>
                </ul>
                <div class="conbanner-arrow-prev"></div>
                <div class="conbanner-arrow-next"></div>
                <div class="conbanner-bottom">
                    <div class="active"></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="content_side">
                <span></span>
                <img src="./images/floor-1-2.png" />
                <img src="./images/floor-1-3.png" />
            </div>
            <div class="content_center">
                <img src="./images/floor-1-4.png" />
            </div>
            <div class="content_side">
                <span></span>
                <img src="./images/floor-1-5.png" />
                <img src="./images/floor-1-6.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Content",
};
</script>

<style lang="less" scoped>
#content {
    width: 1200px;
    margin: 15px auto 0;
    .content_title {
        display: flex;
        justify-content: space-between;
        h3 {
            margin: 9px 0;
            line-height: 30px;
            color: #c81623;
            font-size: 20px;
            font-weight: bold;
        }
        ul {
            display: flex;
            margin: 10px 0;
            line-height: 30px;
        }
        li:nth-child(1) {
            color: #e1251b;
        }
        a {
            color: #666;
        }
        a:hover {
            color: #f00;
            text-decoration: underline;
        }
        a::after {
            content: "|";
            padding: 0 10px;
        }
        li:nth-child(7) a::after {
            content: "";
        }
    }
    // 分类商品内容区
    .content_ad {
        border-top: 2px solid #c81623;
        border-bottom: 1px solid #e4e4e4;
        display: flex;
    }
    .content_ad_shop {
        width: 210px;
        background-color: #f7f7f7;
        ul {
            padding: 9px 0 15px;
        }
        li {
            float: left;
            width: 40%;
            font-size: 12px;
            margin: 0 10px;
            line-height: 26px;
            text-align: center;
            border-bottom: 1px solid #e4e4e4;
        }
        img {
            width: 100%;
        }
    }
    // 分类商品轮播图区
    .content_banner {
        width: 330px;
        height: 360px;
        overflow: hidden;
        position: relative;
        ul {
            width: 990px;
            height: 100%;
            position: absolute;
            left: 0px;
        }
    }
    .content_side {
        position: relative;
        width: 220px;
        height: 360px;
        span {
            position: absolute;
            top: 180px;
            width: 100%;
            height: 1px;
            background-color: #e4e4e4;
        }
        img {
            width: 100%;
            height: 50%;
            transition: all 400ms;
        }
        img:hover {
            opacity: 0.8;
        }
    }
    .content_center {
        width: 220px;
        height: 360px;
        border-left: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;
        box-sizing: border-box;
        img {
            width: 218px;
        }
    }
}
</style>

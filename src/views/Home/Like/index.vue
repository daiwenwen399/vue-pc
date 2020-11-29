<template>
    <!-- 猜你喜欢区 -->
    <div id="like">
        <div class="like_title">
            <h3>猜你喜欢</h3>
            <a href="javascript:;">换一换</a>
        </div>
        <!-- 猜你喜欢商品区 -->
        <ul class="like_goods">
            <li>
                <a href="javascript:;">
                    <img src="./images/like_01.png" />
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <span>¥116.00</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/like_02.png" />
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <span>¥116.00</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/like_03.png" />
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <span>¥116.00</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/like_01.png" />
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <span>¥116.00</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/like_02.png" />
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <span>¥116.00</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/like_03.png" />
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <span>¥116.00</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Like",
};
</script>

<style lang="less" scoped>
#like {
    width: 1200px;
    margin: 15px auto 0;
    .like_title {
        display: flex;
        justify-content: space-between;
        h3 {
            line-height: 30px;
            font-size: 20px;
            font-weight: bold;
        }
        a {
            width: 66px;
            height: 25px;
            line-height: 25px;
            color: #666;
            text-decoration: none;
            background-image: url("./images/icons.png");
            background-position: 182px -104px;
        }
        a:hover {
            color: #e1251b;
        }
    }
    // 猜你喜欢商品区
    .like_goods {
        padding: 0 10px;
        border: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        li {
            width: 196px;
            height: 250px;
            text-align: center;
        }
        a {
            color: #333;
        }
        img {
            width: 142px;
            height: 142px;
            cursor: pointer;
            transition: all 400ms;
        }
        img:hover {
            opacity: 0.8;
            transform: scale(1.1);
        }
        div {
            margin: 0 auto;
            text-align: left;
            width: 142px;
            border-right: 1px solid #e4e4e4;
        }
        p {
            margin: 5px 0;
        }
        span {
            margin: 9px 0;
            line-height: 30px;
            color: #e1251b;
            font-size: 20px;
            font-weight: bold;
        }
    }
}
</style>

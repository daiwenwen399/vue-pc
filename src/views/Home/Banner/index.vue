<template>
    <!-- 商城banner区 -->
    <div id="main">
        <!-- 左侧主导航区 -->
        <div id="main_nav">
            <ul class="main_menu">
                <li>
                    <a href="javascript:;">图书、音像、数字商品</a>
                    <div class="main_submenu">
                        <dl class="div-after">
                            <dt><a href="javascript:;">电子书</a></dt>
                            <dd><a href="javascript:;">婚恋/两性</a></dd>
                            <dd><a href="javascript:;">文学</a></dd>
                            <dd><a href="javascript:;">经管</a></dd>
                            <dd><a href="javascript:;">畅读VIP</a></dd>
                        </dl>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 轮播图区 -->
        <div id="main_banner">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img src="./images/banner1.jpg" />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="./images/banner2.jpg" />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="./images/banner3.jpg" />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="./images/banner4.jpg" />
                    </a>
                </li>
            </ul>
            <div class="banner_arrow_prev"></div>
            <div class="banner_arrow_next"></div>
            <div class="banner_bottom">
                <div></div>
                <div class="active"></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <!-- 右侧雪碧图区 -->
        <div id="main_sprite">
            <!-- 右侧导航栏 -->
            <div class="main_news">
                <h4>
                    <strong>尚品汇快报</strong>
                    <span>更多&gt;</span>
                </h4>
                <ul>
                    <li><strong>[特惠]</strong>备战开学季 全民半价购数码</li>
                    <li><strong>[公告]</strong>备战开学季 全民半价购数码</li>
                    <li><strong>[特惠]</strong>备战开学季 全民半价购数码</li>
                    <li><strong>[公告]</strong>备战开学季 全民半价购数码</li>
                    <li><strong>[特惠]</strong>备战开学季 全民半价购数码</li>
                </ul>
            </div>
            <!-- 雪碧图 -->
            <table>
                <tr>
                    <td class="huafei">
                        <a href="javascript:;">
                            <span></span>
                            <strong>话费</strong>
                        </a>
                    </td>
                    <td class="jipiao">
                        <a href="javascript:;">
                            <span></span>
                            <strong>机票</strong>
                        </a>
                    </td>
                    <td class="dianying">
                        <a href="javascript:;">
                            <span></span>
                            <strong>电影票</strong>
                        </a>
                    </td>
                    <td class="youxi">
                        <a href="javascript:;">
                            <span></span>
                            <strong>游戏</strong>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="caipiao">
                        <a href="javascript:;">
                            <span></span>
                            <strong>彩票</strong>
                        </a>
                    </td>
                    <td class="jiayou">
                        <a href="javascript:;">
                            <span></span>
                            <strong>加油站</strong>
                        </a>
                    </td>
                    <td class="jiudian">
                        <a href="javascript:;">
                            <span></span>
                            <strong>酒店</strong>
                        </a>
                    </td>
                    <td class="huoche">
                        <a href="javascript:;">
                            <span></span>
                            <strong>火车票</strong>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="zhongchou">
                        <a href="javascript:;">
                            <span></span>
                            <strong>众筹</strong>
                        </a>
                    </td>
                    <td class="licai">
                        <a href="javascript:;">
                            <span></span>
                            <strong>理财</strong>
                        </a>
                    </td>
                    <td class="lipin">
                        <a href="javascript:;">
                            <span></span>
                            <strong>礼品卡</strong>
                        </a>
                    </td>
                    <td class="baitiao">
                        <a href="javascript:;">
                            <span></span>
                            <strong>白条</strong>
                        </a>
                    </td>
                </tr>
            </table>
            <!-- 右侧底部图片 -->
            <div class="sprite_img">
                <img src="./images/ad1.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner",
};
</script>

<style lang="less" scoped>
#main {
    width: 1200px;
    height: 464px;
    margin: 0 auto;
    display: flex;
}
// 左侧主导航区
#main_nav {
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
        a {
            color: #333;
            font-size: 14px;
        }
    }
    a:hover {
        color: #e1251b;
        text-decoration: underline;
    }
    // 隐藏导航区
    .main_submenu {
        width: 735px;
        background-color: #f7f7f7;
        border: 1px solid #ddd;
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 210px;
    }
    li:hover .main_submenu {
        display: block;
        z-index: 1;
    }
    dl {
        width: 80%;
        padding: 6px 0;
        margin-left: 10px;
        text-align: center;
        display: flex;
    }
    dt {
        width: 54px;
        height: 22px;
        line-height: 22px;
        font-weight: bold;
        a {
            color: #333;
        }
    }
    dd {
        height: 14px;
        line-height: 14px;
        padding: 0 8px;
        margin-top: 5px;
        border-left: 1px solid #ccc;
        a {
            color: #666;
            font-size: 12px;
        }
    }
}
// 轮播图区
#main_banner {
    width: 730px;
    height: 454px;
    margin: 5px;
    overflow: hidden;
}
// 右侧雪碧图区
#main_sprite {
    width: 250px;
    height: 460px;
    margin-top: 5px;
    // 右侧导航栏
    .main_news {
        width: 100%;
        height: 180px;
        border: 1px solid #e4e4e4;
        border-bottom: 0;
        box-sizing: border-box;
    }
    h4 {
        height: 22px;
        line-height: 22px;
        border-bottom: 1px solid #e4e4e4;
        margin: 5px 5px 0px;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        strong {
            font-size: 14px;
        }
        span {
            font-size: 12px;
        }
    }
    ul {
        font-size: 12px;
        padding: 5px 15px;
    }
    li {
        height: 26px;
        line-height: 26px;
    }
    // 雪碧图
    table {
        width: 250px;
        border-top: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;
        border-collapse: collapse;
        td {
            width: 25%;
            height: 64px;
            border-left: 1px solid #e4e4e4;
            border-bottom: 1px solid #e4e4e4;
            box-sizing: border-box;
            display: inline-block;
        }
        a {
            color: #333;
        }
        span {
            width: 61px;
            height: 40px;
            background-image: url("./images/icons.png");
            display: inline-block;
        }
        strong {
            height: 22px;
            line-height: 22px;
            font-size: 12px;
            font-weight: normal;
            text-align: center;
            display: block;
        }
        td.huafei span {
            background-position: 1px -3px;
        }
        td.jipiao span {
            background-position: -65px -3px;
        }
        td.dianying span {
            background-position: -128px -3px;
        }
        td.youxi span {
            background-position: -190px -3px;
        }
        td.caipiao span {
            background-position: -1px -72px;
        }
        td.jiayou span {
            background-position: -65px -72px;
        }
        td.jiudian span {
            background-position: -128px -72px;
        }
        td.huoche span {
            background-position: -191px -72px;
        }
        td.zhongchou span {
            background-position: -2px -143px;
        }
        td.licai span {
            background-position: -65px -143px;
        }
        td.lipin span {
            background-position: -127px -143px;
        }
        td.baitiao span {
            background-position: -193px -143px;
        }
    }
    // 右侧底部图片
    .sprite_img {
        margin-top: 5px;
        img {
            opacity: 0.8;
        }
    }
    .sprite_img:hover img {
        opacity: 1;
        transition: linear 500ms;
    }
}
</style>

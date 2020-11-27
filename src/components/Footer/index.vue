<template>
    <footer>
        <div id="footer">
            <!-- 底部指南区 -->
            <div class="footer_guild">
                <dl>
                    <dt>购物指南</dt>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">会员介绍</a></dd>
                    <dd><a href="#">生活旅行/团购</a></dd>
                    <dd><a href="#">常见问题</a></dd>
                    <dd><a href="#">购物指南</a></dd>
                </dl>
                <dl>
                    <dt>配送方式</dt>
                    <dd><a href="#">上门自提</a></dd>
                    <dd><a href="#">211限时达</a></dd>
                    <dd><a href="#">配送服务查询</a></dd>
                    <dd><a href="#">配送费收取标准</a></dd>
                    <dd><a href="#">海外配送</a></dd>
                </dl>
                <dl>
                    <dt>支付方式</dt>
                    <dd><a href="#">货到付款</a></dd>
                    <dd><a href="#">在线支付</a></dd>
                    <dd><a href="#">分期付款</a></dd>
                    <dd><a href="#">邮局汇款</a></dd>
                    <dd><a href="#">公司转账</a></dd>
                </dl>
                <dl>
                    <dt>售后服务</dt>
                    <dd><a href="#">售后政策</a></dd>
                    <dd><a href="#">价格保护</a></dd>
                    <dd><a href="#">退款说明</a></dd>
                    <dd><a href="#">返修/退换货</a></dd>
                    <dd><a href="#">取消订单</a></dd>
                </dl>
                <dl>
                    <dt>特色服务</dt>
                    <dd><a href="#">夺宝岛</a></dd>
                    <dd><a href="#">DIY装机</a></dd>
                    <dd><a href="#">延保服务</a></dd>
                    <dd><a href="#">尚品汇E卡</a></dd>
                    <dd><a href="#">尚品汇通信</a></dd>
                </dl>
                <dl>
                    <dt>帮助中心</dt>
                    <dd class="footer-img">
                        <img src="./images/wx.png" />
                    </dd>
                </dl>
            </div>
            <!-- 底部版权区 -->
            <div class="footer_copyright">
                <ul>
                    <li><a href="javascript:;">关于我们</a></li>
                    <li><a href="javascript:;">联系我们</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                    <li><a href="javascript:;">商家入驻</a></li>
                    <li><a href="javascript:;">营销中心</a></li>
                    <li><a href="javascript:;">友情链接</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                    <li><a href="javascript:;">营销中心</a></li>
                    <li><a href="javascript:;">友情链接</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </ul>
                <p>地址：北京市昌平区宏福科技园综合楼6层</p>
                <p>京ICP备19006430号</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style lang="less" scoped>
footer {
    width: 100%;
    min-width: 1200px;
    margin-top: 10px;
    background-color: #eaeaea;
}
#footer {
    width: 1200px;
    margin: 0 auto;
    // 底部指南区
    .footer_guild {
        padding: 20px 20px 20px 40px;
        height: 144px;
        border-bottom: 1px solid #e4e1e1;
        display: flex;
        justify-content: space-between;
    }
    dl {
        dt {
            font-size: 14px;
            font-weight: bold;
        }
        a {
            height: 18px;
            line-height: 18px;
            color: #333;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        img {
            width: 90px;
        }
    }
    // 底部版权区
    .footer_copyright {
        width: 1200px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
        ul {
            width: 730px;
            height: 30px;
            line-height: 30px;
            margin: 0 auto;
            display: flex;
        }
        a {
            color: #333;
        }
        a::after {
            content: "|";
            padding: 0 10px;
        }
        li:nth-child(10) a::after {
            content: "";
        }
        p {
            height: 30px;
            line-height: 30px;
        }
    }
}
</style>

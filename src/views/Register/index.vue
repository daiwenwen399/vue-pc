<template>
    <div id="register">
        <div class="register_box">
            <div class="register_title">
                <p>注册新用户</p>
                <p>我有账户，去<a href="../login">登录</a>/p></p>
            </div>
            <div class="register_ipt">
                <form action="">
                    手机号：<input type="text" /> 验证码：<input type="text" />
                    登录密码：<input type="text" /> 确认密码：<input
                        type="text"
                    />
                </form>
            </div>
        </div>
        <div class="register_copyright">
            <ul>
                <li><a>关于我们</a></li>
                <li><a>联系我们</a></li>
                <li><a>人才招聘</a></li>
                <li><a>商家入驻</a></li>
                <li><a>广告服务</a></li>
                <li><a>手机京东</a></li>
                <li><a>友情链接</a></li>
                <li><a>销售联盟</a></li>
                <li class="last"><a>京东社区</a></li>
            </ul>
            <p>Copyright©2004-2020 尚品汇shang.com 版权所有</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
};
</script>

<style lang="less" scoped>
.register_copyright {
    width: 1200px;
    border-top: 1px solid #ccc;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    ul {
        width: 640px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        display: flex;
    }
    li::after {
        content: "|";
        padding: 0 10px;
    }
    .last::after {
        content: "";
    }
    p {
        margin-top: 20px;
        height: 30px;
        line-height: 30px;
    }
}
</style>

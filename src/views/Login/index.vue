<template>
    <div id="login">
        <div class="login_main">
            <div class="main">
                <div class="login_box">
                    <div class="login_title">
                        <div class="login_title_left">
                            <a href="##">扫码登录</a>
                        </div>
                        <div class="login_title_right">
                            <a href="##" class="active">账户登录</a>
                        </div>
                    </div>
                    <div class="login_info"></div>
                    <div class="login-footer"></div>
                </div>
            </div>
        </div>
        <div class="login_copyright"></div>
    </div>
</template>

<script>
export default {
    name: "Login",
};
</script>

<style lang="less" scoped>
#login {
    width: 100%;
    .login_main {
        min-width: 1200px;
        height: 475px;
        background-color: #e93854;
    }
    .main {
        position: relative;
        width: 1100px;
        height: 475px;
        margin: 0 auto;
        background: url("./images/loginbg.png") no-repeat;
    }
    .login_box {
        width: 346px;
        height: 400px;
        background-color: #fff;
        position: absolute;
        top: 30px;
        right: 30px;
    }
    .login_title {
        width: 346px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #666;
        font-size: 18px;
        border-bottom: 1px solid #f4f4f4;
        display: flex;
        a {
            width: 99%;
            height: 18px;
        }
        .active {
            color: #e1251b;
            font-weight: 700;
        }
        a:hover {
            color: #e1251b;
            font-weight: 700;
        }
    }
    .login_title_left {
        width: 173px;
        border-right: 1px solid #f4f4f4;
    }
    .login_title_right {
        width: 173px;
    }
}
</style>

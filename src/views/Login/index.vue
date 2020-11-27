<template>
    <div id="login">
        <div class="login_main">
            <div class="main">
                <div class="login_box">
                    <div class="login_title">
                        扫码登录
                        账户登录
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
        width: 1200px;
        height: 475px;
        margin: 0 auto;
        background: url("./images/loginbg.png") no-repeat;
    }
    .login_box {
        width: 420px;
        height: 406px;
        background-color: #fff;
        float: right;
        top: 10px;
    }
    .login_wrap{

    }
}
</style>

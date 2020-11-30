<template>
    <div id="login">
        <div class="login_main">
            <div class="main">
                <div class="login_box">
                    <div class="login_tips">
                        <p>
                            <b>！</b
                            >尚品汇不会以任何理由要求您转账汇款，谨防诈骗。
                        </p>
                    </div>
                    <div class="login_title">
                        <div class="login_title_left">
                            <a href="##">扫码登录</a>
                        </div>
                        <div class="login_title_right">
                            <a href="##" class="active">账户登录</a>
                        </div>
                    </div>
                    <form>
                        <div class="username">
                            <i></i
                            ><input
                                type="text"
                                placeholder="请输入用户名/手机号"
                            />
                        </div>
                        <div class="password">
                            <i></i>
                            <input type="password" placeholder="请输入密码" />
                        </div>
                        <div class="forget_password">
                            <a href="javascript:;">忘记密码</a>
                        </div>
                        <el-button type="danger" @click="loginBtn"
                            >登录</el-button
                        >
                    </form>
                    <div class="login_other">
                        <ul>
                            <li class="qq"><a>QQ</a></li>
                            <li class="wechat"><a>微信</a></li>
                            <li class="register"><i></i><a>立即注册</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="login_copyright"></div>
    </div>
</template>

<script>
import { reqLogin } from "@api/user";

export default {
    name: "Login",
    data() {
        return {
            activeName: "saoma",
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        loginBtn() {
            reqLogin("13700000000", "1111111")
                .then((res) => {
                    console.log("res", res);
                })
                .catch((err) => {
                    console.log("err", err);
                });
        },
    },
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
    .login_tips {
        height: 38px;
        line-height: 38px;
        background-color: #fff8f0;
        text-align: center;
        b {
            color: #e1251b;
            font-weight: bold;
        }
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
        justify-content: space-around;
        .login_title_left {
            width: 173px;
            border-right: 1px solid #f4f4f4;
        }
        .login_title_right {
            width: 173px;
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
    form {
        margin: 30px 18px;
        div {
            width: 304px;
            height: 38px;
            border: 1px solid #bdbdbd;
            margin-bottom: 20px;
            position: relative;
        }
        i {
            width: 38px;
            height: 38px;
            border-right: 1px solid #bdbdbd;
            background: url("./images/pwd-icons-new.png") no-repeat;
            position: absolute;
            top: 0;
            left: 0;
        }

        input {
            width: 254px;
            height: 18px;
            line-height: 18px;
            border: 0;
            padding: 10px 0 10px 50px;
            outline: none;
        }
        .password {
            i {
                background-position: -48px 0;
            }
        }
    }
    .forget_password {
        border: 0;
        height: 18px;
        text-align: right;
        a:hover {
            color: #e1251b;
            text-decoration: underline;
        }
    }
    .el-button--danger {
        width: 304px;
    }
    .login_other {
        height: 50px;
        line-height: 50px;
        background-color: #fcfcfc;
        border-top: 1px solid #f4f4f4;
        padding: 0 20px 0;
        li {
            width: 50px;
            margin-right: 10px;
            text-align: center;
            float: left;
            a:hover {
                color: #e1251b;
                text-decoration: underline;
            }
        }
        .register {
            width: 80px;
            float: right;
            position: relative;
            i {
                width: 16px;
                height: 16px;
                background: url("./images/pwd-icons-new.png") -104px -75px
                    no-repeat;
                position: absolute;
                top: 50%;
                margin-top: -8px;
                left: -15px;
            }
            a {
                color: #e1251b;
                font-size: 16px;
            }
        }
    }
}
</style>

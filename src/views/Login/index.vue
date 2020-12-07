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
                            <ValidationProvider
                                rules="required|phone"
                                v-slot="{ errors }"
                            >
                                <i></i
                                ><input
                                    type="text"
                                    placeholder="请输入用户名/手机号"
                                    v-model="user.phone"
                                />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="password">
                            <ValidationProvider
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <i></i>
                                <input
                                    type="password"
                                    placeholder="请输入密码"
                                    v-model="user.password"
                                />
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="forget_password">
                            <label class="checkbox inline">
                                <input
                                    name="m1"
                                    type="checkbox"
                                    v-model="isAutoLogin"
                                />
                                <em>自动登录</em>
                            </label>
                            <a href="javascript:;">忘记密码</a>
                        </div>
                        <el-button type="danger" class="login" @click="submit"
                            >登录</el-button
                        >
                    </form>
                    <div class="login_other">
                        <ul>
                            <li class="qq"><a>QQ</a></li>
                            <li class="wechat"><a>微信</a></li>
                            <li class="register">
                                <i></i
                                ><router-link to="/register"
                                    >立即注册</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="login_copyright">
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
import { mapState } from "vuex";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", required);
extend("phone", {
    validate(value) {
        return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
            value
        );
    },
    message: "手机号格式不规范",
});

export default {
    name: "Login",
    data() {
        return {
            activeName: "saoma",
            user: {
                phone: "",
                password: "",
            },
            isAutoLogin: true,
            isLogining: false,
        };
    },
    computed: {
        ...mapState({
            token: (state) => state.user.token,
            username: (state) => state.user.name,
        }),
    },
    created() {
        if (this.token) {
            this.$router.replace("/");
        }
    },
    methods: {
        async submit() {
            try {
                // 如果正在登录就不允许再发送请求
                if (this.isLogining) return;
                this.isLogining = true;
                const { phone, password } = this.user;
                // 发送请求
                await this.$store.dispatch("login", { phone, password });
                // 登录成功，判断是否勾选自动登录
                if (this.isAutoLogin) {
                    localStorage.setItem("token", this.token);
                    localStorage.setItem("username", this.username);
                }
                // 跳转页面
                this.$router.replace("/");
            } catch {
                this.isLogining = false;
            }
        },
    },
    components: {
        ValidationProvider,
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

        .username input,
        .password input {
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
        span {
            color: #e1251b;
        }
    }
    .forget_password {
        border: 0;
        height: 18px;
        display: flex;
        justify-content: space-between;
        .checkbox {
            height: 18px;
        }
        input {
            margin-top: 2px;
        }
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
    .login_copyright {
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
}
</style>

import request from "@utils/request"

// 注册
export const reqRegister = ({ phone, password, code }) => {
    return request({
        method: "POST",
        url: "/user/passport/register",
        data: {
            phone,
            password,
            code,
        },
    });
};

// 登录
export const reqLogin = (phone, password) => {
    return request({
        method: "POST",
        url: "/user/passport/login",
        data: {
            phone,
            password,
        },
    });
};

// 退出登录
export const reqLoginOut = () => {
    return request({
        method: "GET",
        url: "/user/passport/logout",
    });
};
<template>
    <!-- 登录页布局 -->
    <div class="layout-box">
        <div class="layout-logo">
        </div>
        <div class="layout-register">
            <input type="text" class="input-field" placeholder="账号">
            <input type="password" class="input-field" placeholder="手机号">
            <input type="password" class="input-field" placeholder="密码">
            <input type="password" class="input-field" placeholder="确认密码">
        </div>
        <div>
            <input type="password" class="input-field" placeholder="验证码" required>
            <input type="password" class="input-field" placeholder="获取验证码" required>
        </div>
        <div>
            <button class="login-btn">注册</button>
        </div>
        <div class="link">
            <a href="#">忘记密码？</a> | <a href="#">注册账号</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped lang="less">
@media (layout-boxh: 767px) {
    .header {
        font-size: 18px;
    }
}
.layout-box {
    background: rgb(92, 161, 186);
    height: 760px;
    width: 100%;
}
.layout-logo {
    width: 150px;
    height: 150px;
    background: red;
    border-radius: 100px;
}
.layout-register input{
    width: 75%;
    height: 35px;
    background: red;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 15px;
    border: none;
    font-size: 16px;
}
</style>
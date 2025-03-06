<template>
    <div class="layout-box">
             <!-- 注册 -->
        <div class="content" v-if="isRegister">
            <div class="logo">
                <img src="../../assets/logo.png" alt="logo">
            </div>
            <!-- 账号 -->
            <div class="account">
                <input v-model="username" type="text" class="input-field" placeholder="账号" required>
                <svg-icon class="icon" icon-file-name="avatar-user-svgrepo-com" />
            </div>
            <!-- 手机号码 -->
            <div class="phone">
                <input v-model="phone" type="text" class="input-field" placeholder="手机号" required>
                <svg-icon class="icon" icon-file-name="phone2-o-svgrepo-com" />
            </div>

            <!-- 密码 -->
            <div class="password">
                <input v-model="password" :type="passwordVisible ? 'text' : 'password'" class="input-field" placeholder="密码" required>
                <svg-icon class="icon" icon-file-name="padlock-lock-svgrepo-com" />
                <svg-icon class="eye-icon" :icon-file-name="passwordVisible ? 'eye-open-svgrepo-com' : 'eye-closed-svgrepo-com'" @click="handleEye('password')" />
            </div>
            <!-- 确认密码 -->
            <div class="password">
                <input v-model="confirmPassword" :type="confirmPasswordVisible ? 'text' : 'password'" class="input-field" placeholder="确认密码" required>
                <svg-icon class="icon" icon-file-name="padlock-lock-svgrepo-com" />
                <svg-icon class="eye-icon" :icon-file-name="confirmPasswordVisible ? 'eye-open-svgrepo-com' : 'eye-closed-svgrepo-com'" @click="handleEye('confirmPassword')" />
            </div>
            <!-- 验证码区域 -->
            <div class="login-code">
                <svg-icon class="icon" icon-file-name="shield-check-svgrepo-com" />
                <input type="text" class="input-field" placeholder="验证码" required>
                <button class="get-code">获取验证码</button>
            </div>
            <!-- 注册按钮 -->
            <div>
                <button class="register-btn" @click=" ">注册</button>
            </div>
            <!-- 注册跳转按钮 -->
            <div class="login-link">
                <span @click="toggleForm">已有账号? 登录 </span>
            </div>

        </div>

        <!-- 登录页 -->
        <div class="content" v-else>
            <div class="logo">
                <img src="../../assets/logo.png" alt="logo">
            </div>

            <!-- 账号登录 -->
            <div v-if="showLogin">
                <!-- 账号 -->
                <div class="account">
                    <input v-model="loginForm.username" type="text" class="input-field" placeholder="账号" required>
                    <svg-icon class="icon" icon-file-name="avatar-user-svgrepo-com" />
                </div>
                <!-- 密码 -->
                <div class="password">
                    <input :type="passwordVisible ? 'text' : 'password'" class="input-field" placeholder="密码" required>
                    <svg-icon class="icon" icon-file-name="padlock-lock-svgrepo-com" />
                    <svg-icon class="icon" icon-file-name="padlock-lock-svgrepo-com" />
                    <svg-icon class="eye-icon" :icon-file-name="passwordVisible ? 'eye-open-svgrepo-com' : 'eye-closed-svgrepo-com'" @click="handleEye('password')" />
                </div>
            </div>

            <!-- 手机号登录 -->
            <div v-else>
                <!-- 手机号码 -->
                <div class="phone">
                    <input type="text" class="input-field" placeholder="手机号" required>
                    <svg-icon class="icon" icon-file-name="phone2-o-svgrepo-com" />
                </div>
                <!-- 验证码区域 -->
                <div class="login-code">
                    <svg-icon class="icon" icon-file-name="shield-check-svgrepo-com" />
                    <input type="text" class="input-field" placeholder="验证码" required>
                    <button class="get-code">获取验证码</button>
                </div>
            </div>

            <!-- 切换登录按钮 -->
            <div class="switch-login">
                <span @click="handleShowLogin">{{showLogin ? '手机号登录' : '账号登录'}}</span>
                <span>忘记密码?</span>
                <span>忘记密码?</span>
                <span>忘记密码?</span>
                <span>忘记密码?</span>
                <span>忘记密码?</span>
            </div>

            <div>
                <button class="login-btn" @click="handleLogin">登录</button>
            </div>
            <!-- 注册跳转按钮 -->
            <div class="login-link">
                <span @click="toggleForm">没有账号? 注册 </span>
                <span @click="toggleForm">没有账号? 注册 </span>
                <span @click="toggleForm">没有账号? 注册 </span>
            </div>
        </div>
       
       <!-- 提示框 -->
       <div class="showRules" :style="{'opacity': isOpacity}">请输入账号</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '', // 账号为空
            phone: '',
            password: '',  // 密码为空
            confirmPassword: '', // 确认密码
            isRegister: false, // 控制显示注册页还是登录页
            showLogin: true,
            passwordVisible: false,
            confirmPasswordVisible: false,


            //配置登录数据
            loginForm: {
                username: null,
                password: null,
                phone: null,
                code: null,
            },

            isOpacity: 0
        };
    },
    methods: {
        toggleForm() {
            this.isRegister = !this.isRegister; // 切换 isRegister 的值
        },

        // 切换登录方式
        handleShowLogin() {
            this.showLogin = !this.showLogin;
        },

        //处理隐密
        handleEye(field) {
            if (field === 'password') {
                this.passwordVisible = !this.passwordVisible;
            } else if (field === 'confirmPassword') {
                this.confirmPasswordVisible = !this.confirmPasswordVisible;
            }
        },

        //登录按钮
        handleLogin() {
            if(!this.loginForm.username){
                console.log(this.loginForm.username)
                this.showRules()
            }
            
        },

        //校验弹窗
        showRules() {
            this.isOpacity = '1'
            setTimeout(function() {
                this.isOpacity = '0'
                console.log('000')
            }, 1000);
        }
    },
};
</script>



<style scoped lang="less">
//#region
// 最外层盒子样式
.layout-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: linear-gradient(#9dcbdb, #76d3b8, hsl(203, 71%, 58%));
}

// 内容区样式
.content {
    width: 65%;
}

// logo图标样式设置
.logo {
    display: flex;
    justify-content: center; /* 水平居中 */
    margin-bottom: 40px;
    img {
        width: 50%;
        aspect-ratio: 1 / 1; /* 保持1:1的宽高比 */
    }
}

.account,
.phone,
.password {
    width: 100%;
    position: relative;
    margin-bottom: 1.25rem; // 每个输入框边距是1.25rem */
    input {
        width: 100%;
        height: 2.5rem;
        background: #9edad0;
        border-radius: 1.25rem; //圆角半径为1.25rem */
        color: #fff;
        border: none;
        font-size: 1.125rem;
        text-align: center;
        // 输入框里的提示文字改为白色
        &::placeholder {
            color: #fff; // 将 placeholder 颜色改为白色
            opacity: 0.7; // 可选：添加一些透明度以柔化效果
        }
    }

    // 选中输入框
    .input-field:focus {
        outline: none;
        border-color: #007bff; // 选中时的边框颜色
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* 选中时的阴影 */
    }

    // 输入框提示文案，
    input::-webkit-input-placeholder {
        color: #fff; // 将 placeholder 颜色改为白色
        opacity: 0.7; // 可选：添加一些透明度以柔化效果
        font-size: 1.125rem;
        padding-left: 2.5rem; // 调整 placeholder 文字的左内边距
        text-align: left; // 可选：将 placeholder 文字左对齐
    }

    // 图标
    .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.9375rem;
        font-size: 1.25rem;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    // 小眼睛样式
    .eye-icon {
        position: absolute;
        top: 50%;
        right: 0.625rem; // 调整小眼睛的位置
        transform: translateY(-50%);
        font-size: 1.25rem;
    }
}

// 验证码输入框样式
.login-code {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px; // 添加底部边距
    .input-field {
        background: #9edad0;
        width: 45%;
        border-radius: 1.25rem; //圆角半径为1.25rem */
        height: 2.5rem;
        border: none;
        font-size: 1.125rem;
        padding-left: 2.5rem; // 调整 placeholder 文字的左内边距
        text-align: left; // 可选：将 placeholder 文字左对齐
    }

    // 验证码输入框图标及文字样式
    .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.9375rem;
        font-size: 1.25rem;
        pointer-events: none;
        transition: opacity 0.3s ease;
        color: #696969;
    }

    // 选中验证码输入框改变边框颜色
    .input-field:focus {
        outline: none;
        border-color: #007bff; // 选中时的边框颜色
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* 选中时的阴影 */
    }
    input::-webkit-input-placeholder {
        color: #fff; // 将 placeholder 颜色改为白色
        opacity: 0.7; // 可选：添加一些透明度以柔化效果
        font-size: 1.125rem;
        text-align: left; // 可选：将 placeholder 文字左对齐
    }

    // 获取验证码按钮样式
    .get-code {
        border: none;
        width: 35%;
        height: 2.5rem;
        border-radius: 0.625rem; //圆角半径为1.25rem */
        background: #9edad0;
        color: #696969;
        font-size: 0.875rem;
    }
}

// 切换登录按钮样式
.switch-login {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    color: #e6e6e6;
    padding: 0 0.9375rem 0.625rem 0.9375rem;
}

// 注册按钮样式
.register-btn {
    width: 100%;
    height: 2.5rem;
    border-radius: 1.25rem; //圆角半径为1.25rem */
    border: none;
    background: #9edad0;
    color: #e6e6e6;
    margin-top: 40px;
    font-size: 1.125rem;
}
// 登录按钮样式
.login-btn {
    width: 100%;
    height: 2.5rem;
    border-radius: 1.25rem; //圆角半径为1.25rem */
    border: none;
    background: #9edad0;
    color: #e6e6e6;
    font-size: 1.125rem;
}
// 已有账户登录跳转按钮
.login-link {
    width: 100%;
    margin-top: 40px;
    text-align: center;
    margin-top: 2.5rem;
    color: #e6e6e6;
}
// #endregion


.showRules{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 3.125rem;
    background: #696969;
    color: #fff;
    line-height: 3.125rem;
    text-align: center;
    border-radius: 1.875rem;
    opacity: 0; /* 初始状态显示 */
    transition: opacity 0.5s ease-in-out; /* 3秒动画 */
}
</style>

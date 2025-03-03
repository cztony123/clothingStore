<template>
    <!-- 最外层盒子 -->
    123
    <div class="layout-box">
        <!-- 内容区 -->
        <div class="Content">
            <div class="layout-logo">
                <img src="../../assets/logo.png" alt="描述图片的文字">
            </div>
            <!-- 账号 -->
            <div class="account">
                <input type="text" class="input-field" placeholder="账号" required>
                <svg-icon class="icon" icon-file-name="avatar-user-svgrepo-com" />
            </div>
            <!-- 手机号码 -->
            <div class="phone">
                <input type="text" class="input-field" placeholder="手机号" required>
                <svg-icon class="icon" icon-file-name="phone2-o-svgrepo-com" />
            </div>

            <!-- 密码 -->
            <div class="password">
                <input type="text" class="input-field" placeholder="密码" required>
                <svg-icon class="icon" icon-file-name="padlock-lock-svgrepo-com" />
            </div>
            <!-- 确认密码 -->
            <div class="password">
                <input type="text" class="input-field" placeholder="确认密码" required>
                <svg-icon class="icon" icon-file-name="padlock-lock-svgrepo-com" />
            </div>
            <!-- 验证码区域 -->
            <div class="login-code">
                <input type="text" class="input-field" placeholder="验证码" required>
                <svg-icon class="icon" icon-file-name="shield-check-svgrepo-com" />
                <button>获取验证码</button>
            </div>
            <!-- 注册按钮 -->
            <div>
                <button class="login-btn">注册</button>
                <button>获取验证码</button><button>获取验证码</button><button>获取验证码</button>
            </div>
            <!-- 注册跳转按钮 -->
            <div class="login-link">
                <span @click.prevent="toggleForm">已有账户? 登录</span>
            </div>

        </div>
    </div>
</template>
<style scoped lang="less">
//#region
// 最外层盒子样式
.layout-box {
    display: grid;
    place-items: center; /* 同时实现垂直和水平居中 */
    height: 100%;
    width: 100%;
    background: linear-gradient(#9dcbdb, #76d3b8, hsl(203, 71%, 58%));
}

// 内容区样式
.Content {
    width: 65%;
    position: absolute;
    height: 600px;
    border: 2px solid red;
}

// logo图标样式设置
.layout-logo {
    // display: grid;
    // place-items: center; /* 同时实现垂直和水平居中 */
    display: flex;
    justify-content: center; /* 水平居中 */
    place-items: center;
    margin: auto;
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
    margin: auto;
    position: relative;
    margin-bottom: 1.25rem;
    input {
        width: 100%;
        height: 2.5rem;
        background: #9edad0;
        border-radius: 1.25rem; //圆角半径为1.25rem */
        margin-bottom: 1.25rem; //每个输入框边距是20px
        border: none;
        font-size: 1.125rem;
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
        top: 20%;
        left: 0.9375rem;
        font-size: 1.25rem;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }
}

// 验证码输入框样式
.login-code {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .input-field {
        background: #9edad0;
        width: 55%;
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
        top: 86.5%;
        text-align: center; 
        // left: 20px;
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
    .button{
        width: 35%;
        height: 2.5rem;
        border-radius: 1.25rem; //圆角半径为1.25rem */
        background: #9edad0;
    }
}

// #endregion
</style>
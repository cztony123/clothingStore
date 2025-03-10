const verify = {
    // 验证手机号
    phone: function (phone) {
        if (!/^1[3456789]\d{9}$/.test(phone)) {
            return false;
        }
        return true;
    },
    // 验证密码
    password: function (password) {
        if (!/^[a-zA-Z0-9]{6,16}$/.test(password)) {
            return false;       
        }
    },

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


    // 注册按钮
    handleRegister() {
        // 校验用户名
        if (!this.registerForm.userName) {
            this.handleDialog() //调用提示框函数
            this.text = '请输入账号' // 提示框文字
            return
        }   
    },
    //登录按钮
    handleLogin() {
        //校验用户名
        if (!this.loginForm.userName) {
            this.handleDialog() //调用提示框函数
            this.text = '请输入账号' // 提示框文字
            return
        }

        //校验账号长度
        if (this.loginForm.userName.length < 4  || this.loginForm.userName.length > 12) {
            this.handleDialog();
            this.text = '账号长度不能小于4位大于6位' // 提示框文字
            return
        }

        //校验账号是否包含字母、数字、下划线
        if (!this.loginForm.userName.match(/^[a-zA-Z0-9_]+$/)) {
            this.handleDialog() //调用提示框函数
            this.text = '账号只能包含字母、数字、下划线' // 提示框文字
            return
        }
        

        //校验密码
        if (!this.loginForm.password) {
            this.handleDialog() //调用提示框函数
            this.text = '请输入密码' // 提示框文字
            return
        }

        //校验密码长度
        if (this.loginForm.password.length < 4  || this.loginForm.password.length > 12) {
            this.handleDialog();
            this.text = '密码长度不能小于4位大于6位' // 提示框文字
            return
        }
        //校验密码是否包含字母、数字、下划线
        if (!this.loginForm.password.match(/^[a-zA-Z0-9_]+$/)) {
            this.handleDialog() //调用提示框函数
            this.text = '账号只能包含字母、数字、下划线' // 提示框文字
            return
        }
    },

    //提示框函数
    handleDialog() {
        this.$refs.verify.style.opacity = 1
        this.$refs.verify.style.visibility = 'visible' // 可见
        setTimeout(() => {
            this.$refs.verify.style.opacity = 0; // 设置不透明度为1
            this.$refs.verify.style.visibility = 'hidden' // 不可见
        }, 1500);
    }
}
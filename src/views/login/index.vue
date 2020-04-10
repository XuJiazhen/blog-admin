<template>
  <div class="login-container">
    <el-form ref="loginForm"
             class="login-form"
             :model="loginForm"
             :rules="loginRules">
      <h1 class="title">Admin Login</h1>

      <el-form-item prop="username">
        <el-input placeholder="Username"
                  type="text"
                  v-model="loginForm.username"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input placeholder="Password"
                  type="password"
                  show-password
                  v-model="loginForm.password"></el-input>
      </el-form-item>

      <el-button :loading="loading"
                 class="login"
                 @click="handleLogin">Login</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value !== 'XuJiazhen') {
        return callback(new Error('Please enter the correct user name.'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        return callback(new Error('The password can not less than 6 digits.'));
      } else {
        return callback();
      }
    };
    return {
      loginForm: {
        username: 'XuJiazhen',
        password: '123321...',
      },
      loginRules: {
        username: {
          required: true,
          trigger: 'blur',
          validator: validateUsername,
        },
        password: {
          required: true,
          trigger: 'blur',
          validator: validatePassword,
        },
      },
      loading: false,
    };
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch('login', this.loginForm)
            .then(() => {
              this.$router.push('/');
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  display: flex;
  justify-content: center;

  .login-form {
    width: 28.125rem;
    padding: 9.375rem 0.9375rem 0;

    .title {
      text-align: center;
      user-select: none;
    }

    .login {
      width: 28.125rem;
    }
  }
}
</style>

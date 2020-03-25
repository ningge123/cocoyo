<template>
  <div class="container mt-5">
    <div class="row">
      <div
        class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"
      >
        <div class="login-brand">
          <router-link to="/">
            <img
              src="../../assets/img/stisla-fill.svg"
              alt="logo"
              width="100"
              class="shadow-light rounded-circle"
            />
          </router-link>
        </div>

        <div class="card card-primary">
          <div class="card-header">
            <h4>用户注册</h4>
          </div>

          <div class="card-body">
            <form method="POST" @submit.prevent="submit">
              <div class="form-group">
                <label for="email">邮箱地址</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="cocoyo@qq.com"
                  ref="emailInput"
                  v-model="email"
                  @blur="validateEmail"
                />
                <div class="invalid-feedback"></div>
              </div>

              <div class="form-group">
                <label for="email">用户名</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="5 ~ 12 位字母或数字"
                  ref="usernameInput"
                  v-model="username"
                  @blur="validateUsername"
                />
                <div class="invalid-feedback"></div>
              </div>
              <div class="form-group">
                <label for="password" class="d-block">密码</label>
                <input
                  id="password"
                  type="password"
                  class="form-control pwstrength"
                  data-indicator="pwindicator"
                  placeholder="6 ~ 32 位安全密码"
                  v-model="password"
                  ref="passwordInput"
                />
              </div>

              <div class="form-group">
                <button
                  type="submit"
                  :disabled="!formReady"
                  class="btn btn-primary btn-lg btn-block"
                >注 册</button>
              </div>
            </form>
            <div class="text-center mt-4 mb-3">
              <div class="text-job text-muted">
                已有账号？
                <router-link class="text-blue" :to="{ name: 'auth.login' }">快速登录</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="simple-footer">Copyright &copy; cocoyo 2016 - 2020</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      ticket: null,
      randstr: null,
      error: true,
      regex: {
        email: /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-.]+.(com|io|cc|co|li|it|sh|cn|net|org|jp|tw|me|info|us|in|la|pro|im|so|at|my|ren|red|top|ltd|fun|vip)$/,
        username: /^[a-zA-Z]+[a-zA-Z0-9_-]+$/
      }
    };
  },
  watch: {
    username() {
      this.$refs["usernameInput"].classList.remove("is-invalid");
    },
    email() {
      this.$refs["emailInput"].classList.remove("is-invalid");
    }
  },
  computed: {
    formReady() {
      return (
        !this.error &&
        this.email.match(this.regex.email) &&
        this.username.match(this.regex.username) &&
        this.username.length >= 5 &&
        this.username.length <= 12 &&
        this.password.length >= 6 &&
        this.password.length <= 32
      );
    }
  },
  methods: {
    ...mapActions(["attemptRegister"]),
    validateUsername() {
      this.error = false;

      if (
        !this.username.match(this.regex.username) ||
        this.username.length < 5
      ) {
        this.error = true;
        this.$refs["usernameInput"].classList.add("is-invalid");
        return this.$message.error("请输入 5 ~ 12 位正确格式用户名");
      }

      this.$http
        .post("user/exists", { username: this.username })
        .then(response => {
          if (response.data.success) {
            this.error = true;
            this.$refs["usernameInput"].classList.add("is-invalid");
            return this.$message.error("用户名已经存在！");
          }
        });
    },
    validateEmail() {
      this.error = false;

      if (!this.email.match(this.regex.email)) {
        this.error = true;
        this.$refs["emailInput"].classList.add("is-invalid");
        return this.$message.error("请输入正确的邮箱地址");
      }

      this.$http.post("user/exists", { email: this.email }).then(response => {
        if (response.data.success) {
          this.error = true;
          this.$refs["emailInput"].classList.add("is-invalid");
          return this.$message.error("邮箱已经存在！");
        }
      });
    },
    showCaptcha() {
      let captcha = new window.TencentCaptcha(
        process.env.VUE_APP_CAPTCHA_ID_REGISTER,
        res => {
          if (res.ret === 0) {
            this.ticket = res.ticket;
            this.randstr = res.randstr;
            this.submit();
          } else {
            return this.$message.error("请先完成验证！");
          }
        }
      );
      captcha.show();
    },
    async submit() {
      // if (!this.ticket) {
      //   return this.$message.error("请先完成验证！");
      // }

      try {
        await this.attemptRegister(this.$data);

        this.$message.warning("注册成功，请先验证你邮箱地址！");
        this.$router.push("/");
      } catch (e) {
        if (e.status !== 422) {
          this.$message.error("注册失败！");
        }
      }
    }
  }
};
</script>

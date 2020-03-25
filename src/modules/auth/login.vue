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

        <div class="alert alert-danger alert-dismissible show fade" v-if="error">
          <div class="alert-body">
            <button class="close" data-dismiss="alert">
              <span>×</span>
            </button>
            {{ this.message }}
          </div>
        </div>
        <div class="card card-primary">
          <div class="card-header">
            <h4>登录</h4>
          </div>

          <div class="card-body">
            <form method="post" class="needs-validation" @submit.prevent="submit">
              <div class="form-group">
                <label for="email">用户名 or 邮箱</label>
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  name="email"
                  tabindex="1"
                  v-model="email"
                  required
                  autofocus
                />
              </div>

              <div class="form-group">
                <div class="d-block">
                  <label for="password" class="control-label">密码</label>
                  <div class="float-right">
                    <a href="auth-forgot-password.html" class="text-small">忘记密码?</a>
                  </div>
                </div>
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  name="password"
                  tabindex="2"
                  v-model="password"
                  required
                />
              </div>

              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">登 录</button>
              </div>
            </form>
            <div class="text-center mt-4 mb-3">
              <div class="text-job text-muted">第三方登录</div>
            </div>
            <!-- <div class="row sm-gutters">
              <div class="col-6">
                <a class="btn btn-block btn-social btn-facebook">
                  <span class="fab fa-facebook"></span> Facebook
                </a>
              </div>
              <div class="col-6">
                <a class="btn btn-block btn-social btn-twitter">
                  <span class="fab fa-twitter"></span> Twitter
                </a>
              </div>
            </div>-->
          </div>
        </div>
        <div class="mt-5 text-muted text-center">
          还没有账号?
          <router-link to="/auth/register">注册</router-link>
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
      email: "",
      password: "",
      error: false,
      message: ""
    };
  },
  methods: {
    ...mapActions(["attemptLogin"]),

    async submit() {
      const { email, password } = this;

      try {
        await this.attemptLogin({ email, password });

        this.$swal("欢迎回来~", "Wecome Back!", "success");
        this.$router.push("/");
      } catch (e) {
        this.error = true;
        this.message = e.data.message;
      }
    }
  }
};
</script>

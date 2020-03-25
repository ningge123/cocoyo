<template>
  <div>
    <div class="navbar-bg" style="height:70px"></div>
    <nav class="navbar navbar-expand-lg main-navbar container">
      <router-link to="/" class="navbar-brand sidebar-gone-hide">cocoyo</router-link>
      <div class="nav-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">社区</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">学习</router-link>
          </li>
        </ul>
      </div>
      <form class="form-inline ml-auto">
        <ul class="navbar-nav">
          <li>
            <a href="#" data-toggle="search" class="nav-link nav-link-lg d-sm-none">
              <i class="fas fa-search"></i>
            </a>
          </li>
        </ul>
        <div class="search-element">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            data-width="250"
            style="width: 250px;"
          />
          <button class="btn" type="submit">
            <i class="fas fa-search"></i>
          </button>
          <div class="search-backdrop"></div>
        </div>
      </form>
      <ul class="navbar-nav navbar-right" v-if="isLogged">
        <li class="dropdown dropdown-list-toggle">
          <a href="#" data-toggle="dropdown" class="nav-link nav-link-lg message-toggle beep">
            <i class="far fa-envelope"></i>
          </a>
        </li>
        <li class="dropdown dropdown-list-toggle">
          <a href="#" data-toggle="dropdown" class="nav-link notification-toggle nav-link-lg beep">
            <i class="far fa-bell"></i>
          </a>
        </li>
        <li class="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            class="nav-link dropdown-toggle nav-link-lg nav-link-user"
          >
            <img alt="image" :src="currentUser.avatar" class="rounded-circle mr-1" />
            <div class="d-sm-none d-lg-inline-block">Hi, {{ currentUser.username }}</div>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-title">Logged in 5 min ago</div>
            <router-link :to="'/users/' + currentUser.username" class="dropdown-item has-icon">
              <i class="far fa-user"></i> 个人中心
            </router-link>
            <a href="features-settings.html" class="dropdown-item has-icon">
              <i class="fas fa-cog"></i> 编辑资料
            </a>
            <div class="dropdown-divider"></div>
            <a href="javascript:;" @click="logout" class="dropdown-item has-icon text-danger">
              <i class="fas fa-sign-out-alt"></i> 退出登录
            </a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav navbar-right mt20" style="margin-left:50px" v-else>
        <li class="dropdown">
          <div class="buttons">
            <router-link to="/auth/login" class="btn btn-outline-primary btn-no-margin">登 录</router-link>
            <router-link to="/auth/register" class="btn btn-outline-dark btn-no-margin">注 册</router-link>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLogged", "currentUser"])
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt20 {
  margin-left: 20px !important;
}
.btn-no-margin {
  margin: 0 8px 0px 0;
}
</style>

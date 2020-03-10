<template>
  <div class="main-wrapper">
    <navbar />
    <sidebar />
    <!-- Main Content -->
    <div class="main-content">
      <div class="section">
        <div class="section-header">
          <h1>首页</h1>
          <div class="section-header-breadcrumb">
            <div id="checkin-div" class="breadcrumb-item active">
              <a href="#" onclick="checkin()" class="btn btn-icon icon-left btn-primary">
                <i class="far fa-calendar-check"></i> 每日签到
              </a>
            </div>
          </div>
        </div>
        <div class="alert alert-warning">您的会员计划已过期，请及时续费。</div>
        <router-view />
      </div>
    </div>
    <footer class="main-footer">
      <div class="footer-left">
        Copyright &copy; 2018
        <div class="bullet"></div>Design By
        <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
      </div>
      <div class="footer-right">2.3.0</div>
    </footer>
  </div>
</template>

<script>
import Navbar from "$components/navbar";
import Sidebar from "$components/sidebar";

export default {
  name: "app",
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style>
</style>

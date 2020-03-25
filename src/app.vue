<template>
  <div id="app">
    <div class="main-wrapper container">
      <navbar />
      <div class="main-content" style="min-height: 288px;">
        <!-- Main Content -->
        <!-- <div class="alert alert-warning" v-if="currentUser.id && !currentUser.activated_at">
          您的邮箱尚未验证，将影响你的正常使用。请先验证您的邮箱，如果未收到邮件，请点击
          <a
            href="javascript:void(0)"
            class="text-blue"
            @click="sendActiveMail"
          >重新发送</a>！
        </div>-->

        <router-view />
      </div>

      <footer class="main-footer">
        <div class="footer-left">
          Copyright &copy; 2016 - 2020
          <div class="bullet"></div>Design By
          <router-link to="/">cocoyo</router-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "$components/navbar";

export default {
  name: "app",
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    sendActiveMail() {}
  }
};
</script>

<style>
</style>

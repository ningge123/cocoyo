<template>
  <div class="row">
    <div class="card" v-if="user">
      <div class="card-header">
        <h4>编辑资料</h4>
      </div>
      <div class="card-body">
        <form class="wizard-content mt-2">
          <div class="wizard-pane">
            <div class="form-group row align-items-center">
              <label class="col-md-4 text-md-right text-left">用户名</label>
              <div class="col-lg-4 col-md-6">
                <input
                  type="text"
                  name="name"
                  v-model="user.username"
                  class="form-control"
                  disabled
                />
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label class="col-md-4 text-md-right text-left">邮箱</label>
              <div class="col-lg-4 col-md-6">
                <input type="email" name="email" v-model="user.email" class="form-control" disabled />
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label class="col-md-4 text-md-right text-left">头像</label>
              <div class="col-lg-4 col-md-6">
                <img style="width:100px" :src="user.avatar" class="rounded-circle" />

                <button
                  style="margin-left:100px"
                  class="btn btn-outline-secondary"
                  id="pick-avatar"
                >选择图片</button>
                <avatar-cropper
                  @uploaded="handleUploaded"
                  trigger="#pick-avatar"
                  :upload-url="uploadUrl"
                  :upload-headers="uploadHeaders"
                ></avatar-cropper>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-4 text-md-right text-left mt-2">个性签名</label>
              <div class="col-lg-4 col-md-6">
                <textarea class="form-control" v-model="user.bio"></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-4 text-md-right text-left mt-2">性别</label>
              <div class="col-lg-4 col-md-6">
                <div class="selectgroup w-100">
                  <label class="selectgroup-item">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      v-model="user.gender"
                      class="selectgroup-input"
                    />
                    <span class="selectgroup-button">
                      <i class="fas fa-mars"></i>
                    </span>
                  </label>
                  <label class="selectgroup-item">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      v-model="user.gender"
                      class="selectgroup-input"
                    />
                    <span class="selectgroup-button">
                      <i class="fas fa-venus"></i>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label class="col-md-4 text-md-right text-left">Github</label>
              <div class="col-lg-4 col-md-6">
                <input type="input" v-model="github" class="form-control" />
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label class="col-md-4 text-md-right text-left">个人站点</label>
              <div class="col-lg-4 col-md-6">
                <input type="input" v-model="website" class="form-control" />
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label class="col-md-4 text-md-right text-left">微博</label>
              <div class="col-lg-4 col-md-6">
                <input type="input" v-model="weibo" class="form-control" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4"></div>
              <div class="col-lg-4 col-md-6 text-right">
                <a href="#" class="btn btn-icon icon-right btn-primary">
                  更新
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AvatarCropper from "vue-avatar-cropper";
export default {
  data() {
    return {
      user: null,
      github: "",
      weibo: "",
      website: ""
    };
  },
  created() {
    this.loadUser();
  },
  components: { AvatarCropper },
  computed: {
    ...mapGetters(["authToken"]),
    uploadUrl() {
      return this.$http.defaults.baseURL + "/files/upload";
    },
    uploadHeaders() {
      return {
        Authorization: `Bearer ${this.authToken}`
      };
    }
  },
  methods: {
    loadUser() {
      this.$http.get("/me").then(data => {
        this.user = data.data;

        if (this.user.extends) {
          var extendsObj = JSON.parse(this.user.extends);
          this.github = extendsObj.github;
          this.weibo = extendsObj.weibo;
          this.website = extendsObj.home_url;
        }
      });
    },
    handleUploaded(response) {
      if (response.code != 0) {
        this.$message.error("图片上传错误!");
      }

      this.user.avatar = response.data.url;
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
}
</style>
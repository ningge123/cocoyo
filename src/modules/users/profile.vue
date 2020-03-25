<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card author-box">
          <div class="card-body">
            <div class="UserAvatarEditor ProfileHeader-avatar">
              <div class="UserAvatar">
                <img
                  class="Avatar Avatar--large UserAvatar-inner"
                  width="160"
                  height="160"
                  src="https://pic2.zhimg.com/v2-963d351bba5ea597172851d04a5001d3_xl.jpg"
                />
              </div>
              <label class="UploadPicture-wrapper">
                <input type="file" accept="image/png, image/jpeg" class="UploadPicture-input" />
                <div class="Mask UserAvatarEditor-mask Mask-hidden">
                  <div class="Mask-mask Mask-mask--black UserAvatarEditor-maskInner"></div>
                  <div class="Mask-content">
                    <svg
                      class="Zi Zi--Camera UserAvatarEditor-cameraIcon"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                    >
                      <path
                        d="M20.094 6S22 6 22 8v10.017S22 20 19 20H4.036S2 20 2 18V7.967S2 6 4 6h3s1-2 2-2h6c1 0 2 2 2 2h3.094zM12 16a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0 1.5a5 5 0 1 0-.001-10.001A5 5 0 0 0 12 17.5zm7.5-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                        fill-rule="evenodd"
                      />
                    </svg>
                    <div class="UserAvatarEditor-maskInnerText">修改我的头像</div>
                  </div>
                </div>
              </label>
            </div>
            <div class="author-box-details">
              <div class="author-box-name">
                <p class="username">
                  cocoyo
                  <i class="fas fa-mars" style="color: cornflowerblue; font-size:17px"></i>
                </p>
              </div>
              <div class="author-box-description">
                <p>一个快乐的极客~</p>
              </div>
              <a href="#" class="btn btn-social-icon mr-1 btn-facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="btn btn-social-icon mr-1 btn-twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="btn btn-social-icon mr-1 btn-github">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="btn btn-social-icon mr-1 btn-instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <div class="w-100 d-sm-none"></div>
              <div class="float-right mt-sm-0 mt-3">
                <router-link to="/users/edit" class="btn btn-outline-dark">编辑个人资料</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card author-box">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <router-link class="nav-link" :to="'/users/' + this.$route.params.username">文章</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="'/users/' + this.$route.params.username + '/follow'"
              >关注</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="'/users/' + this.$route.params.username + '/fans'"
              >粉丝</router-link>
            </li>
          </ul>

          <div class="card-body">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import AvatarCropper from "vue-avatar-cropper";
export default {
  data() {
    return {
      userAvatar: ""
    };
  },
  created() {},
  // components: { AvatarCropper },
  computed: {
    ...mapGetters(["authToken", "currentUser"]),
    uploadUrl() {
      return "/api/files/upload";
    },
    uploadHeaders() {
      return {
        Authorization: `Bearer ${this.authToken}`
      };
    },
    avatar() {
      return this.currentUser.avatar;
    }
  },
  methods: {
    handleUploaded(response) {
      // if (!response["url"]) {
      //   this.$message.error(response.error);
      // }
      console.log(response);

      this.userAvatar = response.data.url;
    },
    async submit() {
      await this.$http
        .patch(`users/${this.$parent.currentUser.username}`, {
          avatar: this.newUrl
        })
        .then(() => {
          this.$message.success("头像已更新");
          this.$store.dispatch("loadUser");
        });
    }
  }
};
</script>

<style>
.card-body {
  position: relative;
}

.username {
  font-size: 26px;
  font-weight: 600;
  font-synthesis: style;
  line-height: 30px;
}
.ProfileHeader-avatar {
  position: absolute !important;
  top: -25px;
  left: 25px;
  z-index: 1;
}
.UserAvatarEditor {
  cursor: pointer;
  position: relative;
}
.UserAvatar {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  background-color: #fff;
  border: 4px solid #fff;
  border-radius: 8px;
}
.UserAvatar-inner {
  vertical-align: top;
}
.Avatar--large {
  border-radius: 4px;
}
.Avatar {
  background: #fff;
  border-radius: 2px;
}
.UploadPicture-input {
  display: none;
}
input[type="file" i] {
  -webkit-appearance: initial;
  background-color: initial;
  cursor: default;
  align-items: baseline;
  color: inherit;
  text-align: start !important;
  padding: initial;
  border: initial;
}
.Mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  -webkit-transition: opacity 0.2s ease-in;
  transition: opacity 0.2s ease-in;
}
.Mask-mask {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.Mask-content {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  color: #fff;
  text-align: center;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.UserAvatarEditor-cameraIcon {
  margin-bottom: 14px;
  fill: #fff;
}
.UserAvatarEditor-maskInnerText {
  white-space: nowrap;
}
.Mask-hidden {
  pointer-events: none;
  opacity: 0;
}
.Mask-hidden:hover {
  pointer-events: none;
  opacity: 1;
}
</style>
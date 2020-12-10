<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">Number Is Number</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="用户名">
            <!-- <el-button slot="prepend" icon="el-icon-user"></el-button> -->
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="param.password"
            @keyup.enter.native="submitForm()"
          >
            <!-- <el-button slot="prepend" icon="el-icon-lock"></el-button> -->
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <!-- <p class="login-tips">Tips : 用户名和密码admin。</p> -->
      </el-form>
    </div>
  </div>
</template>

<script>
import auth from "@/utils/auth";

export default {
  data: function () {
    return {
      param: {
        username: "admin",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    /**
     * @description:
     * @param {type}
     * @return {type}
     * @author: Sule
     */
    submitForm() {
      if (this.param.password === 'admin1234' && ['admin', 'd1', 'd2', 'd3'].includes(this.param.username)) {
        auth.setLocalStorage("isLogin", true);
        auth.setLocalStorage("user", this.param.username);
        this.$message.success("登录成功");
          this.$router.push({
            path: "/list"
          });
      } else {
        this.$message.error("登录失败!");
      }
    }
  }
};
</script>

<style scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-image: url(../assets/login-bg.jpg);
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #067ef7;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  /* alternate：动画先正常运行再反方向运行，并持续交替运行 */
  /* animation: horizontal 18s linear 0s infinite alternate,
    vertical 12s linear 0s infinite alternate; */
}
.ms-login:hover {
  animation-play-state: paused;
  background: rgba(255, 255, 255, 0.5);
}
@keyframes horizontal {
  0% {
    left: 180px;
  }
  100% {
    /* 运动最大距离为盒子长度减去球的长度 */
    left: calc(100% - 150px);
  }
}
@keyframes vertical {
  0% {
    top: 180px;
  }
  100% {
    /* 运动最大距离为盒子高度减去球的高度 */
    top: calc(100% - 40px);
  }
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
.el-select {
  width: 100%;
}
.el-select-dropdown__item {
  font-size: 12px;
}
</style>
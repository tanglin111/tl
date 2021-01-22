<template>
  <div>
    <header class="headPlan">
      <i @click="$router.back()">&lt;</i>
      <p>跳过</p>
    </header>
    <h2>新用户注册</h2>

    <section class="text1">
      <el-input
        v-model.lazy.number="telphone"
        placeholder="请输入手机号"
        clearable
      ></el-input>
    </section>
    <section class="text1">
      <el-input placeholder="请输入验证码" width="80%"></el-input>
      <button class="btnY" @click="getyzm1">获取验证码</button>
    </section>
    <section class="text1">
      <el-input
        placeholder="请输入6-16位新密码"
        v-model.lazy="password"
        show-password
        onkeyup="value=value.replace([a-zA-Z]\w{5,15}$ )"
      ></el-input>
    </section>

    <footer class="otherO">
      <button class="btn" @click="regist">注册</button>
      <section class="xieyi">
        <input type="checkbox" v-model="checked" />
        <i>我已阅读并接受</i>
        <em>《中国移动服务条款》</em>
        <i>和</i>
        <em>《隐私协议》</em>
      </section>
    </footer>
  </div>
</template>

<script>
import { userRegister } from "../../util/requers";
import { successAlert, warningAlert } from "../../util/alert";
import { getyzm } from "../../util/nomalway";
export default {
  name: "newUser",
  data() {
    return {
      checked: false,
      telphone: "",
      password: "",
    };
  },
  methods: {
    regist() {
      //判断协议有没有勾选
      if (this.checked == false) {
        warningAlert("请勾选协议");
      } else {
        userRegister({
          mobile: this.telphone,
          password: this.$md5(this.password).toUpperCase(),
        }).then((res) => {
          if (res.data.status == 1) {
            successAlert("注册成功");
            this.$router.push("login");
          } else {
            warningAlert("注册失败");
          }
        });
      }
    },
    //获取验证码
    getyzm1() {
      getyzm();
    },
  },
};
</script>
<style scoped>
.search input::-webkit-input-placeholder {
  color: #ccc;
}
.search input:-moz-placeholder {
  color: #ccc;
}
.search input::-moz-placeholder {
  color: #ccc;
}
.search input:-ms-input-placeholder {
  color: #ccc;
}
.headPlan {
  position: relative;
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
}
.headPlan i {
  position: absolute;
  font-size: 1.5rem;
  left: 1rem;
  top: 0.5rem;
}
.headPlan p {
  position: absolute;
  top: 0.8rem;
  right: 1rem;
}
h2 {
  font-weight: bolder;
  box-sizing: border-box;
  padding-left: 1.5rem;
}
.text1 {
  margin: 0 auto;
  width: 20rem;
  height: 3rem;
  line-height: 3rem;
  margin-top: 2rem;
  border-bottom: solid 0.05rem #cccccc;
}
.telY {
  padding-left: 1rem;
  height: 3rem;
}
.btnY {
  color: #cfcfcf;
  border: none;
  background-color: transparent;
  float: right;
  margin-top: 1rem;
}
.otherO {
  width: 100%;
  position: relative;
}
.btn {
  position: absolute;
  left: calc(50% - 10rem);
  top: 2rem;
  width: 20rem;
  height: 3rem;
  text-align: center;
  font-size: 1.1rem;
  border-radius: 1.5rem;
  background-image: linear-gradient(to right, #b6ecff, #82d4ff);
  color: #ffffff;
}
.xieyi {
  position: absolute;
  top: 6rem;
  left: calc(50% - 8rem);
  width: 16rem;
}
.xieyi input {
  margin-right: 0.5rem;
}
.xieyi i {
  font-size: 0.8rem;
  opacity: 0.5;
}
.xieyi em {
  font-size: 0.8rem;
}
</style>
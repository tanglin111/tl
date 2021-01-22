<template>
  <div>
    <header class="header1">
      <i @click="dologinC" data-url="weHead">×</i>
      <p @click="dologinC" data-url="newUser">注册</p>
    </header>
    <section class="xuexiao">
      <img src="../../img/logo.png" />
    </section>
    <section class="telphoto">
      <h2>18145093211</h2>
      <i>中国移动提供认证服务</i>
    </section>

    <section class="btn" @click="doLogin">一键登录</section>

    <section class="xieyi">
      <el-checkbox v-model="checked"></el-checkbox>
      <i>我已阅读并接受</i>
      <em>《中国移动服务条款》</em>
      <i>和</i>
      <em>《隐私协议》</em>
    </section>
    <footer class="foot">
      <i></i>
      <em>其他登录方式</em>
      <i></i>
      <div class="over" @click="dologinC" data-url="otherLogin">
        <img src="../../img/phone.png" />
      </div>
    </footer>
  </div>
</template>

<script>
import { changeUrl } from "../../util/nomalway";
import {  warningAlert } from "../../util/alert";
export default {
  name: "login",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    dologinC() {
      //改变路由地址
      changeUrl();
    },
    //登录
    doLogin() {
      if (this.checked == false) {
        warningAlert("请勾选协议");
      }
    },
  },
};
</script>
<style scoped>
.header1 {
  position: relative;
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
}
.header1 i {
  position: absolute;
  font-size: 1.5rem;
  left: 1rem;
  top: 0.5rem;
}
.header1 p {
  position: absolute;
  top: 0.8rem;
  right: 1rem;
}
.xuexiao {
  width: 100%;
  height: 10rem;
  position: relative;
}
.xuexiao img {
  position: absolute;
  width: 4rem;
  top: 3rem;
  left: calc(50% - 2rem);
}
.telphoto {
  width: 20rem;
  height: 5rem;
  margin: 0 auto;
  text-align: center;
  line-height: 5rem;
}
.telphoto h2 {
  height: 2rem;
  font-size: 2rem;
  font-weight: 700;
}
.telphoto i {
  font-size: 0.8rem;
  opacity: 0.5;
}
.btn {
  width: 20rem;
  height: 3rem;
  margin: 0 auto;
  line-height: 3rem;
  text-align: center;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 1.5rem;
  background-image: linear-gradient(to right, #40c7f9, #0b98e2);
  color: #ffffff;
}
.xieyi {
  position: absolute;
  top: 24rem;
  left: calc(50% - 8rem);
  width: 16rem;
}
.xieyi input {
  margin-right: 0.5rem;
}
.xieyi i {
  margin-left: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.5;
}
.xieyi em {
  font-size: 0.8rem;
}
.foot {
  position: absolute;
  bottom: 2rem;
  width: 12rem;
  left: calc(50% - 6rem);
  text-align: center;
}

.foot i {
  display: inline-block;
  width: 2rem;
  height: 0.35rem;
  border-top: solid 0.05rem #cccccc;
}
.foot em {
  margin: 0 0.2rem;
  color: #cccccc;
  font-size: 0.8rem;
}

.over {
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  margin-top: 1rem;
  background: #66ccff;
  border-radius: 3rem;
  padding-top: 0.9rem;
  box-sizing: border-box;
}

.over img {
  margin: 0 auto;
  width: 1.2rem;
}
</style>
<template>
  <div>
    <header class="headPlan">
      <i @click="dochangeO" data-url="login">&lt;</i>
      <p @click="dochangeO" data-url="newUser">注册</p>
    </header>
    <nav class="title-nav">
      <p
        :class="{ btnP: activity, nobtnP: normal }"
        id="yzm"
        @click="changeWay"
      >
        验证码登录
        <span :class="{ boline: activity }"></span>
      </p>

      <p
        :class="{ btnP: !activity, nobtnP: !normal }"
        id="psw"
        @click="changeWay"
      >
        密码登录
        <span :class="{ boline: !activity }"></span>
      </p>
    </nav>
    <section class="subtext">
      <yzm :class="{ way: !activity }" ref="wayYzm"></yzm>
      <paw :class="{ way: activity }" ref="wayPsw"></paw>
    </section>

    <footer class="otherO">
      <button class="btn" @click="login" data-url="weHead">登录</button>
      <section class="xieyi">
        <el-checkbox v-model="checek"></el-checkbox>
        <i>我已阅读并接受</i>
        <em>《中国移动服务条款》</em>
        <i>和</i>
        <em>《隐私协议》</em>
      </section>
    </footer>
  </div>
</template>

<script>
import { changeUrl } from "../../util/nomalway";
import yzm from "./yzm";
import paw from "./paw";
import { successAlert, warningAlert } from "../../util/alert";
import { userLogin } from "../../util/requers";
import { mapMutations } from "vuex";
export default {
  name: "otherLogin",
  components: {
    yzm,
    paw,
  },
  data() {
    return {
      activity: true,
      normal: false,
      checek: false,
    };
  },
  methods: {
    ...mapMutations({
      changeLogin:"changeLogin"
      
      }),
    dochangeO() {
      //改变路由地址
      changeUrl();
    },
    //改变用户的登录方式
    changeWay() {
      this.activity = !this.activity;
      this.normal = !this.normal;
    },
    //用户登录
    login() {
      if (
        this.$refs.wayPsw.value.password == "" ||
        this.$refs.wayPsw.value.telphone == ""
      ) {
        warningAlert("账号或者密码不能为空");
      }
      if (this.checek == false) {
        warningAlert("请勾选协议");
      } else {
        userLogin({
          mobile: this.$refs.wayPsw.value.telphone,
          password: this.$md5(this.$refs.wayPsw.value.password).toUpperCase(),
        }).then((res) => {
          // 判断是否登录成功
          if (res.data.result_data.status == 1) {
            this.userToken = res.data.token;
            // 将用户token保存到vuex中
            this.changeLogin({ Authorization: this.userToken });
            //将数据储存到浏览器中
            let information =JSON.stringify(res.data.result_data) 
            localStorage.setItem("infomation",information)

            successAlert("登录成功");
            this.$router.push({
              name: "weHead",
            });
          } else {
            warningAlert("登录失败");
          }
        });
      }
    },
  },

  created() {},
};
</script>
<style scoped>
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
.title-nav {
  display: flex;
  width: 100%;
  height: 5rem;
  padding-left: 1.5rem;
  box-sizing: border-box;
}
.title-nav p {
  position: relative;
  height: 3rem;
  line-height: 3rem;
}
.btnP {
  font-weight: bolder;
  font-size: 1.5rem;
}
.nobtnP {
  font-size: 0.9rem;
  color: #cfcfcf;
  line-height: 3.5rem !important;
}
.title-nav span {
  display: none;
}
.boline {
  display: block !important;
  position: absolute;
  left: calc(50% - 2rem);
  top: 2.5rem;
  width: 4rem;
  height: 0.2rem;
  background-image: linear-gradient(to right, #40c7f9, #0b98e2);
}
.subtext {
  width: 100%;
  height: 10rem;
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
.xieyi i {
  margin-left: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.5;
}
.xieyi em {
  font-size: 0.8rem;
}
.way {
  display: none;
}
</style>
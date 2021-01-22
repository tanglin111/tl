<template>
  <div>
    <header class="headPlan">
      <i @click="$router.back()">&lt;</i>
    </header>
    <h2>修改密码</h2>
    <section class="text1">
      <el-input placeholder="请输入手机号" v-model.lazy="telphone" clearable>
      </el-input>
    </section>
    <section class="text1">
      <el-input
        placeholder="请输入旧密码"
        v-model.lazy="password"
        show-password
        onkeyup="value=value.replace(^[a-zA-Z]\w{5,15}$ )"
        id="password"
      >
      </el-input>
    </section>
    <section class="text1">
      <el-input
        placeholder="请输入新密码"
        v-model.lazy="passwordN"
        show-password
      ></el-input>
    </section>

    <footer class="otherO">
      <button class="btn" data-url="myself" @click="dofinally">完成</button>
    </footer>
  </div>
</template>

<script>
import { newPassword } from "../../util/requers";
import { successAlert, warningAlert } from "../../util/alert";

export default {
  name: "updatePsw",
  data() {
    return {
      telphone: "",
      password: "",
      passwordN: "",
    };
  },
  methods: {
    dofinally() {
      if (this.telphone == "" || this.password == "") {
        warningAlert("请填写手机号或密码");
      } else {
        newPassword({
          password: this.$md5(this.password).toUpperCase(),
          newPassword: this.passwordN,
        }).then((res) => {
          console.log(res.status)
          if (res.status > 0) {
            successAlert("修改成功");
            this.$router.push("myself");
          } else {
            warningAlert("修改失败");
          }
        });
      }
    },
  },
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
}
.telY {
  padding-left: 1rem;
  height: 3rem;
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
</style>
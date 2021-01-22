<template>
  <div>
    <section class="text1">
      <el-input
        placeholder="请输入手机号"
        v-model.lazy="value.telphone"
        clearable
        class="telY"
      >
      </el-input>
    </section>
    <section class="text1">
      <el-input
        placeholder="请输入验证码"
        v-model.lazy="value.yzm"
        clearable
        class="telY"
      >
      </el-input>
      <button class="btnY" @click="doclick">获取验证码</button>
    </section>
  </div>
</template>

<script>
import { getyzm } from "../../util/nomalway";
export default {
  name: "yzm",
  data() {
    return {
      value: {
        telphone: "",
        yzm: "",
      },
    };
  },
  methods: {
    doclick() {
      getyzm();
    },
  },
};
</script>
<style scoped>
.text1 {
  margin: 0 auto;
  width: 20rem;
  height: 3rem;
  line-height: 3rem;
  margin-top: 2rem;
}
.telY {
  height: 3rem;
}
.btnY {
  color: #cfcfcf;
  border: none;
  background-color: transparent;
  float: right;
  margin-top: 1rem;
}
</style>
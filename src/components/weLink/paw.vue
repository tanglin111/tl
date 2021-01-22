<template>
  <div>
    <section class="text1">
      <el-input
        placeholder="请输入手机号"
        v-model.lazy="value.telphone"
        clearable
        class="telY "
      >
      </el-input>
    </section>
    <section class="text1">
      <el-input
        placeholder="请输入密码"
        v-model.lazy="value.password"
        show-password
        class="telY "
      ></el-input>
    </section>
  </div>
</template>

<script>
export default {
  name: "paw",
  data() {
    return {
      value: {
        telphone: "",
        password: "",
      },
    };
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
</style>
import Vue from "vue"
var vm = new Vue();
//成功
export const successAlert = (msg) => {
  vm.$message({
    showClose: true,
    message: msg,
    type: 'success'
  });
}
//警告
export const warningAlert = (msg) => {
  vm.$message({
    showClose: true,
    message: msg,
    type: 'warning'
  });
}

import router from "../router/myRouter"
//路由的跳转
export const changeUrl = () => {
    let overDom = event.currentTarget;
    let newUrl = overDom.dataset["url"];
    router.push({ name: newUrl });

}
//验证码的倒计时
export const getyzm= () => {
    let btn = event.currentTarget;
      btn.disabled = true; //禁止按钮第二次点击
      let index = 60;
      btn.innerHTML = index + "秒后重新获取";
      let time = setInterval(function () {
        index--;
        btn.innerHTML = index + "秒后重新获取";

        if (index == 0) {
          clearInterval(time);
          btn.innerHTML = "获取验证码";
          btn.disabled = false; //允许按钮的第二次点击
        }
      }, 1000);
}
<template>
  <div>
    <header class="head">
      <section class="bgbox">
        <img src="../../img/tusz01.png" />
      </section>
      <section class="peopleLogo">
        <img
          src="../../img/tubiao.png"
          class="tubiao"
          @click="chageUrl"
          data-url="myself"
          id="touxiang"
        />
        <div class="logonBtn" id="logonBtn">
          <p @click="chageUrl" data-url="otherLogin">登录</p>
          <b>/</b>
          <p @click="chageUrl" data-url="newUser">注册</p>
        </div>
        <i class="jiantou">&gt;</i>
      </section>
    </header>
    <ul class="class-list">
      <li @click="chageUrl(item.id)" :data-url="item.url" v-for="item in list" :key="item.id" :data-id="item.id">
        <img :src="item.src" />
        <p>{{item.title}}</p>
        <span v-show="item.num>0">{{item.num}}</span>
        <i>&gt;</i>
      </li>
    </ul>
    <section class="colorBG"></section>
    <foot class="foot"></foot>
  </div>
</template>

<script>
import foot from "./foot";
import { warningAlert} from "../../util/alert";
import {  message } from '../../util/requers';
export default {
  components: {
    foot,
  },
  name: "weHead",
  data() {
    return {
      Student: "",
      list: [
        {
          id: 6,
          src: require("../../../static/img/sq01.png"),
          title: "开课通知",
          num: 0,
          url: "kaike",
        },
        {
          id: 7,
          src: require("../../../static/img/jh01.png"),
          title: "计划",
          num: 0,
          url: "plan",
        },
        {
          id: 8,
          src: require("../../../static/img/tz01.png"),
          title: "开课通知",
          num: 0,
          url: "",
        },
        {
          id: 9,
          src: require("../../../static/img/xx02.png"),
          title: "学习计划",
          num: 0,
          url: "",
        },
        {
          id: 10,
          src: require("../../../static/img/jd02.png"),
          title: "线下鉴定申请",
          num: 0,
          url: "",
        },
      ],
    };
  },
  methods: {
    chageUrl(myid) {
      //获取当前点击的标签，以及上面的data-url属性
      let overDom = event.currentTarget;
      let newUrl = overDom.dataset["url"];
      this.$router.push(newUrl+'?id='+myid);
    },
  },
  mounted() {
    this.Student = JSON.parse(localStorage.getItem("infomation"));
    if (this.Student == null || this.Student == "") {
      warningAlert("请用户登录！");
      document.getElementById("touxiang").style.pointerEvents="none";//用户没有登录，不能跳转到个人中心
    } else {
      document.getElementById("logonBtn").innerText = this.Student.user_name;
      document.getElementById("touxiang").style.pointerEvents=true;//用户登录，可以跳转到个人中心

    message({}).then((res) => {
      res.data.result_data.forEach(element => {
        this.list.forEach(item =>{
          if (item.id == element.t_category_fk && element.is_read == 0){
            item.num++;
          }
        })
        
      });
    })
    }
  },
};
</script>

<style scoped>
.head {
  width: 100%;
  height: 15rem;
  position: relative;
}
.bgbox {
  width: 100%;
  height: 12rem;
  background: url("../../img/gr01.png") no-repeat;
  background-size: cover;
}
.bgbox > img {
  position: absolute;
  width: 1.5rem;
  top: 4rem;
  right: 1rem;
}
.peopleLogo {
  position: absolute;
  width: 22rem;
  height: 6.5rem;
  top: 8rem;
  left: calc(50% - 11rem);
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: 0.05rem 0.05rem 0.05rem #999;
  display: flex;
}
.tubiao {
  margin: 1.5rem;
  width: 4rem;
}
.logonBtn {
  width: 8rem;
  height: 2rem;
  display: flex;
  margin-top: 3rem;
}
.logonBtn p {
  font-weight: 700;
}
.jiantou {
  margin-top: 3rem;
  margin-left: 5rem;
  opacity: 0.5;
}
.class-list {
  position: relative;
  width: 100%;
  height: 17rem;
  background-color: #ffffff;
}
.class-list li {
  width: 100%;
  height: 3.34rem;
  display: flex;
  align-items: center;
}
.class-list li img {
  height: 1.2rem;
  margin-left: 1rem;
}
.class-list li p {
  font-size: 1.1rem;
  margin-left: 0.5rem;
  font-weight: 550;
}
.class-list li span {
  font-size: 0.8rem;
  color: #ffffff;
  width: 1.5rem;
  height: 1rem;
  margin-left: 0.5rem;
  background: #ff0000;
  text-align: center;
  border-radius: 1rem;
}
.class-list li i {
  position: absolute;
  right: 2rem;
  font-weight: bold;
}

.colorBG {
  position: absolute;
  bottom: 3.2rem;
  width: 100%;
  height: 7rem;
  background-color: #ebebeb;
}

.foot {
  position: fixed;
  bottom: 0rem;
}
</style>
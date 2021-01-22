<template>
  <div>
    <section class="main">
      <header class="headPlan">
        <i @click="doclick" data-url="index">&lt;</i>
      </header>
      <h2>在线课堂</h2>
      <ul clearfix id="allul" :style="{ height: Allheight + 'rem' }">
        <li v-for="item in recommended" :key="item.index">
          <img :src="item.image_path" class="classphoto" />
          <h3>{{ item.course_name }}</h3>
          <p>{{ item.course_describe }}</p>
          <section class="touxiang clearfix">
            <img src="../../img/time.png" />
            <p>{{ item.teacher_name }}</p>
          </section>
          <section class="clearfix people">
            <div class="boo1">
              <img src="../../img/liul02.png" />
              <i>{{ item.course_view_counts }}</i>
            </div>

            <div class="boo2">
              <img
                src="../../img/dianz01.png"
                @click="changeURl"
              />
              <img
                src="../../img/05.png"
                class="activity"
                
                @click="changeURl2"
              />
              <i>{{ item.course_goods }}</i>
            </div>
          </section>
        </li>
         <button class="more" @click="moreInfo">获取更多...</button>
      </ul>
    </section>
  </div>
</template>

<script>
import { recommended } from "../../util/requers";
import { changeUrl } from "../../util/nomalway";
let index = 2;
export default {
  data() {
    return {
      recommended: [],
      flag: true,
      Allheight: 30,
    };
  },
  methods: {
    doclick() {
      changeUrl();
    },
     //没有点赞的点击事件
    changeURl() {
      let newImg = event.currentTarget;
      newImg.style.display = "none";
      newImg.nextElementSibling.style.display = "block";
    },
    //点赞之后的点击事件
    changeURl2() {
      let newImg = event.currentTarget;
      newImg.style.display = "none";
      newImg.previousElementSibling.style.display = "block";
    },
     moreInfo() {
      let classAll = document.getElementById("allul");

      let num = this.recommended.length / 2;
      //当定义的index没有达到后台给的数据的时候，点击一次高度翻倍
      if (index < num) {
        console.log(classAll.offsetHeight);
        this.Allheight = 30 * index;
        index++;
      }
      
      //当数据展示完成之后，再次点击，收起信息
      if (index >= num) {
        this.Allheight = 22.2;
        event.currentTarget.innerHTML = "获取更多...";
        index = 2;
      }
    },
  },
  mounted() {
    recommended({}).then((res) => {
      this.recommended = res.data.result_data;
    });
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.headPlan {
  position: relative;
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
  border-bottom: solid 0.05rem #cccccc;
  margin-bottom: 1rem;
}
.headPlan i {
  position: absolute;
  font-size: 1.5rem;
  left: 1rem;
  top: 0.5rem;
}
ul {
  width: 100%;
  background: #ffffff;
  height: 30rem;
  overflow: hidden;
  position: relative;
}
li {
  width: 50%;
  height: 14rem;
  box-sizing: border-box;
  padding: 0 1rem;
  margin-bottom: 1.5rem;
  float: left;
}
h2 {
  width: 6rem;
  margin: 0 auto;
  margin-bottom: 2rem;
}
.classphoto {
  height: 50%;
  margin: 0 auto;
}
h3{
    width: 100%;
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.touxiang {
  height: 1.5rem;
}
.touxiang > img {
  float: left;
  width: 1rem;
  margin-top: 0.4rem;
}
.touxiang > p {
  float: left;
  margin-top: 0.4rem;
  font-size: 0.9rem;
  margin-left: 0.3rem;
  color: #999999;
}
.people {
  height: 20%;
  display: flex;
}
.people div {
  position: relative;
  width: 50%;
}

.people img {
  position: absolute;
}
.people i {
  position: absolute;
  font-size: 0.8rem;
  color: #999999;
}
.boo1 i {
  left: 1rem;
}
.boo2 i {
  right: 1rem;
}
.boo2 img {
  right: 2.5rem;
}
.activity {
  top: -0.15rem;
  display: none;
}
.more {
  cursor: pointer;
  width: 5rem;
  text-align: center;
  position: absolute;
  left: calc(50% - 2.5rem);
  bottom: 0rem;
  z-index: 50;
  background-color: #ffffff;
}
</style>
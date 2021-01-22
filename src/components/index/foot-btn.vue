<template>
  <div class="box clearfix">
    
    <section class="foot-box bgColor">
      <img src="../../img/io01.png" />
      <p class="textColor">首页</p>
    </section>
    <section class="foot-box" @click="doclik" data-url="weHead" >
      <img src="../../img/wo01.png" />
      <p>我的</p>
    </section>
  </div>
</template>

<script>
import {changeUrl} from '../../util/nomalway'
export default {
  name: "footbtn",

  methods: {
    doclik() {
      changeUrl()
    },
  },
};
</script>
<style scoped>
@import "../../../public/common.css";
.box {
  width: 100%;
  height: 3.2rem;
  background-color: #ebebeb;
}

.foot-box {
  float: left;
  height: 100%;
  width: 50%;
  position: relative;
}
.bgColor {
  background-color: #ffffff;
}
img {
  width: 2rem;
  position: absolute;
  left: calc(50% - 1rem);
}
p {
  position: absolute;
  top: 2rem;
  left: calc(50% - 1rem);
}
.textColor {
  color: #68b2e9;
}
</style>
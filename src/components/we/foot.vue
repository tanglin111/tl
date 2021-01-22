<template>
  <div class="box clearfix">
    <section class="foot-box " @click="doclick" data-url="index" >
      <img src="../../img/io02.png" />
      <p class="">首页</p>
    </section>
    <section class="foot-box bgColor" >
      <img src="../../img/wo02.png" />
      <p class="textColor">我的</p>
    </section>
  </div>
</template>

<script>
import {changeUrl} from '../../util/nomalway'
export default {
  name: "foot1",

  methods: {
    doclick(){
   changeUrl()
    }
  },
}

</script>
<style scoped>
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
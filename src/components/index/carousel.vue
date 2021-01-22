<template>
  <section class="carousel">
    <el-carousel height="12.5rem" width="100%">
      <el-carousel-item v-for="item in Imgurl" :key="item.index" >
        <img :src="item.img_path" class="carousel-photo" />
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
import {banner} from "../../util/requers"
export default {
  name: "carousel",
  data() {
    return {
      Imgurl: [ ]
    };
  },
  methods:{
    setSize: function() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    }
  },
  mounted(){
    banner({}).then((res) =>{
      console.log(res.data.result_data)
      this.Imgurl = res.data.result_data;
    })
     // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    }
     
  }
};
</script>
<style >
.carousel {
  position: relative;
  width: 100vw;
  height: 12.5rem;
  top: 0.5rem;
  padding-top: 0.5rem;
  box-sizing: border-box;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-photo {
  width: 100%;
}

 .el-carousel__button  {
    display: block;
    opacity: .48;
    width: 25px;
    height: 2px;
    background-color: #FFF;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: .3s;
}

.el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 8px 2px;
}
</style>
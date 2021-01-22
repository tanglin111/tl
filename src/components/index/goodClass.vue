<template>
  <section class="goodClass">
    <h3 class="title">好课推荐</h3>
    <div class="classAll" id="classAll" >
      <section
        v-for="(item,index) in recommended"
        class="classAll-one boder2 clearfix"
        :key="item.index"
      >
        <section class="clearfix voerBox">
          <div class="imgBox">
            <img :src="item.image_path" class="photo-left" />
          </div>

          <section class="voerBox-right">
            <h3 class="jieshao-title">{{ item.course_name }}</h3>
            <p class="text">{{ item.course_describe }}</p>

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
                <img :src="item.is_good === 1 ? isGood.url1:isGood.url2" @click="changeURl(item.t_course_pk,index)"/>
                <i>{{ item.course_goods }}</i>
              </div>
            </section>
          </section>
        </section>
      </section>
     
    </div>
  </section>
</template>

<script>
import { recommended, isGood } from "../../util/requers";
export default {
  name: "goodClass",
  data() {
    return {
      recommended: [],
      isGood:{
        url1:require("../../../static/img/05.png"),
        url2:require("../../../static/img/dianz01.png")
      }
    };
  },
  mounted() {
    recommended({}).then((res) => {
      this.recommended = res.data.result_data;
    });
  },
  methods: {
    //点赞
    changeURl(id,index) {
      let token = localStorage.getItem('Authorization');
      if (!token) {
            this.$router.push('/otherLogin');
        } else {
             isGood({
               t_course_pk: id
             }).then((res) => {
               if (res.data.status >=1){
                 this.recommended[index].is_good=1;
                 this.recommended[index].course_goods = this.recommended[index].course_goods + 1;
                 
               }else if (res.data.status == -1){
                  this.recommended[index].is_good=0;
                 this.recommended[index].course_goods = this.recommended[index].course_goods - 1;
               }
             })
        }
    },
   
  },
};
</script>
<style scoped>
.goodClass {
  width: 100%;
  padding-top: 1rem;
  box-sizing: border-box;
  background-color: #f3f2f2;
}
.title {
  box-sizing: border-box;
  margin-left: 1rem;
  padding-top: 0.5rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
}
.classAll {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  width: 85%;
  height: 22rem;
  border-radius: 1rem;
  background-color: #fff;
  padding-top: 0.2rem;
  overflow: hidden;
}
.boder2 {
  border-bottom: solid 0.05rem #cccccc;
}
.classAll-one {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  height: 11rem;
}
.voerBox {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
}
.imgBox {
  width: 40%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
}
.photo-left {
  align-self: center;
  margin: 0 auto;
  height: 60%;
  width: auto;
}
.voerBox-right {
  align-self: center;
  margin-left: 1rem;
  position: relative;
  width: 50%;
  height: 55%;
}
.jieshao-title {
  /* 超出显示省略号 */
  /* overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap; */

  /* 超出2行显示省略号  */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.text {
  font-size: 0.9rem;
  color: #999999;
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
  margin-top: 0.5rem;
  font-size: 0.8rem;
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
  right: 3rem;
}
.activity {
  top: -0.15rem;
  display: none;
}

</style>
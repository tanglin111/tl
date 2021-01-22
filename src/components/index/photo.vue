<template>
   <section class="nav-photo">
            <section class="photo-text">
                <img src="../../img/tu (2).png">
                <p>高技能人培</p>
            </section>
            <section class="photo-text">
                <img src="../../img/tu (3).png">
                <p>师带徒</p>
            </section>
            <section class="photo-text">
                <img src="../../img/tu (4).png">
                <p>科技扶贫</p>
            </section>
            <section class="photo-text" data-url="classroom" @click="doChage">
                <img src="../../img/tu (5).png">
                <p>在线课堂</p>
            </section>
            <section class="photo-text">
                <img src="../../img/tu (1).png">
                <p>在线资源</p>
            </section>
        </section>
</template>

<script>
import {changeUrl} from '../../util/nomalway'
export default {
  name:"photo",
  methods:{
      doChage(){
          changeUrl()
      }
  }

}

</script>
<style scoped>
@import "../../../public/common.css";
.nav-photo{
    width: 100%;
    height: 8rem;
    margin: 0 auto;
   box-sizing: border-box;
   padding-top: 2rem;
    display: flex;
    background-color: #ffffff;
}
.photo-text{
    padding: 0.2rem 0.5rem;
    width: 20%;
    box-sizing: border-box;
    height: 5rem;
}
.photo-text>img{
    margin: 0 auto;
    height: 70%;
    width: auto;
}
.photo-text>p{
    width: 100%;
    text-align: center;
    margin-top: 0.2rem;
    font-size: 0.8rem;
}
</style>
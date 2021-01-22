<template>
    <header class="main-head">
    <img src="../../img/logo.png"  class="logo"/>
    <section class="main-head-text clearfix">
      <img src="../../img/sousuo.png" />
      <input type="text" required placeholder="2020年高级电工班教育大纲" />
    </section>
    <img src="../../img/time.png" class="time" />
     </header>
</template>

<script>
export default {
  name: "head1",
};
</script>
<style scoped>
@import "../../../public/common.css";
.main-head {
  width: 100%;
  height: 3rem;
  position: relative;
}

.logo {
  position: absolute;
  top: 0.5rem;
  
  height: 2.5rem;
}

.main-head-text {
  position: absolute;
  width: 60%;
  height: 95%;
  top: calc(50% - 1.2rem);
left: calc(50% - 25%);
  border-radius: 2rem;
  background-color: #f2f2f2;
  line-height: 2rem;
  display: flex;
  color: #d7d7d7;
}

.main-head-text > img {
  float: left;
  height: 1.2rem;
  width: auto;
  margin-left: 0.5rem;
  margin-top: 0.8rem;
  margin-right: 0.5rem;
}

.main-head-text > input {
  float: left;
  border: none;
  background-color: transparent;
  height: 100%;
  width: 90%;
}

.time {
  position: absolute;
  height: 2rem;
  width: auto;
  top: 0.6rem;
  right: 0rem;
}
</style>
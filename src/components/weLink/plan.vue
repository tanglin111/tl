<template>
  <div>
      <header class="headPlan">
          <i @click="$router.push('weHead')">&lt;</i>
          <h3>计划</h3>
      </header>
      <div class="planBG">

      </div>
  </div>
</template>

<script>
export default {
    name:"plan"
}

</script>
<style scoped>
.headPlan {
    position: relative;
    width: 100%;
    height: 3rem;
    border-bottom: solid 0.05rem #cccccc;
}
.headPlan i {
    position: absolute;
    font-size: 1.5rem;
    left: 1rem;
    top: 0.5rem;
}
.headPlan h3 {
    position: absolute;
    width: 5rem;
    left: calc(50% - 2.5rem);
    top: 0.5rem;
    font-weight: bold;
}
.planBG {
    position: absolute;
    height: 8rem;
    width: 8rem;
    top: calc(50% - 12rem);
    left: calc(50% - 4rem);
    background: url("../../img/zanwu01.png") no-repeat;
    background-size: contain;
}
</style>
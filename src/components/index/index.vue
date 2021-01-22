<template>
<div class="beijin">
     <aa></aa>
     <carousel></carousel>
     <photo></photo>
     <goodClass class="goodClass"></goodClass>
     <footbtn class="foot"></footbtn>
  </div>
  
</template>


<script>
 import aa from './head'
 import carousel from './carousel'
 import photo from './photo'
 import goodClass from './goodClass'
 import footbtn from './foot-btn.vue'



export default {
  name:"index",

  components: {
     aa,
     carousel,
     photo,
     goodClass,
     footbtn  
  }
}

</script>
<style scoped>
@import "../../../public/common.css";
.foot{
  position: absolute;
  height: 3rem;
  left: 0;
  right: 0;
}
</style>
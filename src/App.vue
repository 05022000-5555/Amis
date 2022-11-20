<template>
  <div class="main">
    <SizebarLeft/>
    <SizebarRight/>
  </div>
</template>

<script>
// import MISA from "./js/demo"
import SizebarLeft from "./components/layout/TheSizebarLeft.vue"
import SizebarRight from "./components/layout/TheSizebarRight.vue"

export default {
  name: 'App',
  components: {
    SizebarLeft,
    SizebarRight,
    
  },
  methods: {
    
  }, 
  data() {
    return {
      
    }
  }
  
}
</script>

<style>
@import url(./css/mains.css);
</style>

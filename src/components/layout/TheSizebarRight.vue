<template>
    <div class="sizebar-right">
      <TheHeader/>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
import TheHeader from '../layout/TheHeader.vue'
export default {
  name: 'TheSizebarRight',

  components: {
    TheHeader
    },
  
}
</script>
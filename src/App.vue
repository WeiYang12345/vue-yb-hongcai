<template>
  <div id="app">
    <!-- <hc-header></hc-header> -->
    <router-view/>
  </div>
</template>
<script>
import HcHeader from '@/components/hc-header'
export default {
  data() {
    return {
      
    }
  },
  components: {
    HcHeader
  }

}
</script>
<style lang="scss">

</style>

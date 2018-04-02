<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {reqAddress} from './api/'
export default {
  async mounted () {
    const abc = await reqAddress('40.10038,116.37867')
    console.log(abc)
  },
  components: {
    FooterGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

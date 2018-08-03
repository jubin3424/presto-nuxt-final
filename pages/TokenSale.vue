<template>
  <div>
    <div style="color: #494949; font-size: 4rem;
                  font-weight: bolder; text-align: center; margin-top: 6vh; margin-bottom: 4vh;">
      <nuxt-link :to="{ name: 'TokenSale' }">TokenSale</nuxt-link></div>
    <div style="position: relative">
      <!--<no-ssr>-->
        <!--<parallax :fixed="true">-->
          <!--<img src="../static/img/image2.jpg">-->
        <!--</parallax>-->
      <!--</no-ssr>-->
    </div>
    <!-- Router-view -->
    <nuxt/>
    <!-- Router-view -->
  </div>
</template>

<script>
  import Parallax from 'vue-parallaxy'
  export default {
    name: 'TokenSale',
    components: {
      Parallax
    }
  }
</script>

<style>

</style>

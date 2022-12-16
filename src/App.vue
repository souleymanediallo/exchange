<template>
  <div>
    <home-page />
  </div>
</template>

<script>
import HomePage from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    HomePage
  }
}

</script>

<!--
  // npm install --save css-loader@^5
  // npm install --save sass-loader@^10
  // npm install sass
--> 

<style lang="scss">
   @import 'assets/styles/variables.scss';
   @import '~bulma/bulma.sass';
   @import 'assets/styles/main.scss';
   
</style>
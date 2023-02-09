<template>
  <div class=" container">
    <header-top></header-top>
    <hr>
    <router-view></router-view>
</div>
</template>

<style>

</style>

<script>
  import HeaderTop from './components/HeaderTop.vue';

  export default {
    components: {
      HeaderTop,
    },
  };
</script>
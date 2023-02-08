<template>
  <div class=" container">
    <login-form></login-form>
  </div>
</template>

<style>

</style>

<script>
  import ProductList from './components/ProductList.vue';
  import LoginForm from './components/LoginForm.vue';
  export default {
    components: {
      ProductList,
      LoginForm
    }
  };
</script>
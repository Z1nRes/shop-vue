<template>
  <div class=" container">
    <signup-form></signup-form>
    <hr>
    <login-form></login-form>
  </div>
</template>

<style>

</style>

<script>
  import ProductList from './components/ProductList.vue';
  import LoginForm from './components/LoginForm.vue';
  import SignupForm from './components/SignupForm.vue';
  export default {
    components: {
      ProductList,
      LoginForm,
      SignupForm
    }
  };
</script>
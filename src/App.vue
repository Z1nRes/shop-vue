<template>
  <div class=" container">
    <p v-if="$store.getters.isAuth">Вы авторизованны! - {{ $store.getters.isAuth }} - <span class="border border-danger p-2" @click="LOGOUT">LOGOUT</span></p>
    <p v-if="!$store.getters.isAuth">Вы не авторизованны! - {{ $store.getters.isAuth }}</p>
    <hr>
    <signup-form></signup-form>
    <hr>
    <login-form></login-form>
  </div>
</template>

<style>

</style>

<script>
  import { mapMutations } from 'vuex';
  import ProductList from './components/ProductList.vue';
  import LoginForm from './components/LoginForm.vue';
  import SignupForm from './components/SignupForm.vue';

  export default {
    components: {
      ProductList,
      LoginForm,
      SignupForm
    },
    methods: {
      ...mapMutations(['LOGOUT'])
    }
  };
</script>
<template>
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item me-2"><router-link to="/" class="nav-link">Products</router-link></li>
        <li class="nav-item me-2"><router-link to="/cart" class="nav-link">Cart</router-link></li>
        <li class="nav-item me-2"><router-link to="/orders" class="nav-link">Orders</router-link></li>
        <li class="nav-item me-2" v-if="!$store.getters.isAuth"><router-link to="/login" class="nav-link border border-primary">Login</router-link></li>
        <li class="nav-item me-2" v-if="!$store.getters.isAuth"><router-link to="/signup" class="nav-link border border-primary">Signup</router-link></li>
        <li class="nav-item me-2" v-if="$store.getters.isAuth" @click="LOGOUT"><a href="#" class="nav-link">Logout</a></li>
      </ul>
    </header>
</template>

<style>

</style>

<script>
  import { mapMutations } from 'vuex';
  export default {
    methods: {
      ...mapMutations(['LOGOUT'])
    }
  }

</script>
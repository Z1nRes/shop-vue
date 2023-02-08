<template>
    <div class="d-flex flex-wrap">
      <div class="card card-style" v-for="product in allProducts.data" :key="product.id">
        <div class="card-body card-body-style">
          <h5 class="card-title">{{ product.name }} - ({{ product.price }} &#36;)</h5>
          <p class="card-text">{{ product.description }}</p>
          <a href="#" class="btn btn-primary btn-style">Add to cart</a>
        </div>
      </div>
    </div>
</template>

<style>
    .card-style {
        width: 18rem; 
        margin: 0 0 30px 30px;
    }
    .card-body-style {
        position: relative; 
        padding-bottom: 50px;
    }
    .btn-style {
        position: absolute; 
        bottom: 0px; 
        margin-bottom: 15px;
    }
</style>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: mapGetters(['allProducts']),
        async mounted() {
            this.$store.dispatch('fetchProducts')
        }
    };
</script>
import { createStore } from 'vuex'


export default createStore({
  actions: {
    async fetchProducts(ctx) {
        const res = await fetch('https://jurapro.bhuser.ru/api-shop/products')
        const products = await res.json()
        ctx.commit('updateProducts', products)
    }
  },
  mutations: {
      updateProducts(state, products) {
          state.products = products
      }
  },
  state: {
      products: []
  },
  getters: {
      allProducts(state) {
          return state.products
      }
  },
})

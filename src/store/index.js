import { createStore } from 'vuex'
import { cartRequest, loginRequest, signupRequest } from '@/utils/api'
import router from '@/router'

export default createStore({
  actions: {
    async fetchProducts(ctx) {
        const res = await fetch('https://jurapro.bhuser.ru/api-shop/products')
        const products = await res.json()
        ctx.commit('updateProducts', products)
    },

    AUTH_REQUEST: ({commit}, inputData) => {
      return new Promise((resolve, reject) => {
        loginRequest(inputData)
          .then((token) => {
            commit('AUTH_SUCCESS', token);
            localStorage.setItem('myAppToken', token);
            resolve();
          })
          .catch(() => {
            commit('AUTH_ERROR');
            localStorage.removeItem('myAppToken');
            reject();
          })
      })
    },

    async ADD_TO_CART({commit}, product) {
      await fetch(`https://jurapro.bhuser.ru/api-shop/cart/${product.id}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.state.token
          },
        })
          .then((response) => {
            router.push('/')
        })
    }

  },
  mutations: {
      updateProducts(state, products) {
          state.products = products
      },
      AUTH_SUCCESS: (state, token) => {
        state.token = token
      },
      AUTH_ERROR: (state) => {
        state.token = ''
      },
      LOGOUT: (state) => {
        localStorage.removeItem('myAppToken');
        state.token = ''
      }
  },
  state: {
      products: [],
      token: localStorage.getItem('myAppToken') || '',

  },
  getters: {
      allProducts(state) {
          return state.products
      },
      isAuth: (state) => !!state.token 
  },
})

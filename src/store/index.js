import { createStore } from 'vuex'
import { loginRequest, signupRequest } from '@/utils/api'

export default createStore({
  actions: {
    async fetchProducts(ctx) {
        const res = await fetch('https://jurapro.bhuser.ru/api-shop/products')
        const products = await res.json()
        ctx.commit('updateProducts', products)
    },

    AUTH_REQUEST: ({commit}, user) => {
      return new Promise((resolve, reject) => {
        loginRequest(user)
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

    SIGNUP_REQUEST: ({commit}, user) => {
      return new Promise((resolve, reject) => {
        signupRequest(user)
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
        console.log('work')
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

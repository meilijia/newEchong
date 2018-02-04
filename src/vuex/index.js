import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  username: '丁伟东',
  cart: []
}

// 持久化
if (localStorage.getItem('data')) {
  var data = JSON.parse(localStorage.getItem('data'))
  state = data
}

const mutations = {
  setUserName: function (state, username) {
    state.username = username
    // 持久化，保存数据
    localStorage.setItem('data', JSON.stringify(state))
  },
  addToCart: function (state, goodsInfo) {
    state.cart.push(goodsInfo)
    // 持久化，保存数据
    localStorage.setItem('data', JSON.stringify(state))
  }
}

const actions = {
  setUserNameA: function ({commit}, username) {
    commit('setUserName', username)
  },
  addToCartA: function ({commit}, goodsInfo) {
    commit('addToCart', goodsInfo)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

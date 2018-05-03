/* eslint-disable */
import axios from 'axios'
import fb from 'firebase'

const state = {
  datasets: [],
  options: []
}

const getters = {
  getAllDatasets: state => state.datasets
}

const actions = {
  getAllDatasets({ commit }) {
    const products = [1, 2, 3]
    commit('setDatasets', products)
  },
}

const mutations = {
  setDatasets(state, data) {
    state.datasets = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import dataset from './modules/dataset'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    dataset: dataset, 
  },
  strict: debug,
  //plugins: debug ? [] : []
})
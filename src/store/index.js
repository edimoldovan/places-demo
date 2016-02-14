import Vue from 'vue'
import Vuex from 'Vuex'
import * as actions from './actions'
import { placesInitialState, placesMutations } from './modules/places'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    place: {},
    places: placesInitialState
  },
  actions,
  mutations: [placesMutations],
  strict: debug,
  middlewares: debug ? [Vuex.createLogger()] : []
})

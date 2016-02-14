import {
  CREATE_PLACE,
  RECEIVE_PLACES
} from '../mutation-types'

// initial state
export const placesInitialState = []

// mutations
export const placesMutations = {
  [RECEIVE_PLACES] (state, places) {
    state.places = places
  },

  [CREATE_PLACE] (state, place) {
    state.place = place
  }
}

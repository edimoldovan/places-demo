import api from '../api'
import * as types from './mutation-types'

export const createPlace = ({ dispatch, state }, place) => {
  const savedCartItems = [...state.cart.added]
  dispatch(types.CHECKOUT_REQUEST)
  api.createPlace(
    place,
    () => dispatch(types.CHECKOUT_SUCCESS),
    () => dispatch(types.CHECKOUT_FAILURE, savedCartItems)
  )
}

export const getAllPlaces = ({ dispatch }) => {
  api.getPlaces(places => {
    dispatch(types.RECEIVE_PLACES, places)
  })
}

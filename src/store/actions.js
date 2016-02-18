import api from '../api'
import * as types from './mutation-types'

export const createPlace = ({ dispatch, state }, name, open) => {
  dispatch(types.CREATE_PLACE, {name: name, open: open})
}

export const getAllPlaces = ({ dispatch }) => {
  api.getPlaces(places => {
    dispatch(types.RECEIVE_PLACES, places)
  })
}

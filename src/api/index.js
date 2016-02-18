const _places = [
  {
    'id': 1,
    'name': 'Merido',
    'open': true
  },
  {
    'id': 2,
    'name': 'Il Treno',
    'open': false
  },
  {
    'id': 3,
    'name': 'Yo Steakhouse',
    'open': true
  }
]

export default {
  getPlaces (cb) {
    setTimeout(() => cb(_places), 100)
  },

  createPlace (place, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 ? cb() : errorCb()
    }, 100)
  }
}

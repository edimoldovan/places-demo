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
      _places.push({
        id: _places.length,
        name: name,
        open: open
      })
      cb(_places)
    }, 100)
  }
}

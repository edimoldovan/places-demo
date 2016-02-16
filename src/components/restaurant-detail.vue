<template>
  <h1>{{ place.name }}</h1>
  <h3>{{ place.open }}</h3>
</template>

<script>

import store from '../store'

export default {

  name: 'RestaurantDetailView',

  data () {
    return {
      place: {}
    }
  },

  route: {
    // Get the `to` route using ES2015 argument destructuring;
    data ({ to }) {
      return {
        place: store.state.places.filter(place => parseInt(place.id, 10) === parseInt(to.params.id, 10))[0]
      }
    }
  }
}
</script>

<style lang="sass?outputStyle=expanded">

  $white: #ffffff;
  $red: red;
  $blue: rgb(30, 87, 153);

  ul.list {
    float: left;
    width: 15rem;
    height: 44rem;
    overflow-x: hidden;
    overflow-y: scroll;

    li {
      float: left;
      clear: both;
      width: 15rem;

      a {
        padding: 0.5rem ;
        float: left;
        width: 14rem;

        h2 {
          font-weight: normal;
          font-size: 2rem;
        }

        h3 {
          font-weight: normal;
          font-size: 1rem;
        }
      }

      a.active {
        background-color: $white;
        color: $blue;
      }
    }
  }

</style>

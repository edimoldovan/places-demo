<template>
  <div class="detail">
    <h1>{{ place.name }}</h1>
    <h2 v-if="place.open">Yep, we're open</h2>
    <h2 v-else>Sorry, we're closed</h2>
  </div>
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

  created () {
    this.update()
  },

  methods: {
    update () {
      this.place = store.state.places.filter(place => parseInt(place.id, 10) === parseInt(this.$route.params.id, 10))[0]
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
  $blue: #1C86EE;
  $tr-blue: rgba(12, 131, 241, 0.2);

  .detail {
    display: inline-block;
    padding: 1rem;
    margin: 0;
    background-color: $tr-blue;
    color: $blue;
    width: 33rem;
    min-height: 30rem;

    label {
      font-size: 1.5rem;
    }

    input[type=checkbox] {
      height: 1rem;
      width: 1rem;
    }
  }

</style>

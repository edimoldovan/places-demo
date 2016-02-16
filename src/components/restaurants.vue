<template>
  <h2>Restaurants</h2>
  <ul class="list">
    <li v-for="place in places">
      <a v-link="{ name: 'restaurant-detail', params: { id: place.id } }">
        <h2>{{ place.name }}</h2>
      </a>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>

import store from '../store'
const { getAllPlaces } = store.actions

export default {

  name: 'RestaurantsView',

  computed: {
    places () {
      return store.state.places
    }
  },

  /* created () {
    console.log('store retrieved')
    getAllPlaces()
  },*/

  methods: {
    update () {
      this.places = store.state.places
    }
  },

  route: {
    // Get the `to` route using ES2015 argument destructuring;
    data ({ to }) {
      getAllPlaces()
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

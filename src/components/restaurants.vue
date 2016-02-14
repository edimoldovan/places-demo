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
const { getAllPlaces, createPlace } = store.actions

export default {

  name: 'RestaurantsView',

  /* data () {
    return {
      places: store.state.places
    }
  }, */

  computed: {
    places () {
      return store.state.places
    }
  },

  created () {
    getAllPlaces()
  },

  methods: {
    createPlace () {
      createPlace()
    }
  }/* ,

  route: {
    data ({ to }) {
      // This is the route data hook. It gets called every time the route
      // changes while this component is active.
      //
      // What we are doing:
      //
      // 1. Get the `to` route using ES2015 argument destructuring;
      // 2. Get the `page` param and cast it to a Number;
      // 3. Fetch the items from the store, which returns a Promise containing
      //    the fetched items;
      // 4. Chain the Promise and return the final data for the component.
      //    Note we are waiting until the items are resolved before resolving
      //    the entire object, because we don't want to update the page before
      //    the items are fetched.
      return {
        places: []
      }
    }
  } */
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

<template>
  <a class="add" v-link="{ path: '/restaurants/add' }">Add restaurant</a>
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
  $blue: #1C86EE;

  .add {
    font-size: 2rem;
    float: left;
    background-color: $white;
    color: $blue;
    margin: 0;
    padding: 1rem;
    width: 13rem;

    &.active {
      background-color: $blue;
      color: $white;
    }
  }

  ul.list {
    float: left;
    clear: both;
    width: 15rem;
    list-style: none;

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
          font-size: 1.5rem;
          color: $blue;
        }

        h3 {
          font-weight: normal;
          font-size: 1rem;
        }
      }

      a.active {
        background-color: $blue;
        h2 {
          color: $white;
        }
      }
    }
  }

  .empty {
    display: inline-block;
    padding: 10rem 2rem;
    margin: 0;
    font-size: 2rem;
  }

</style>

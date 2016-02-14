<template>
  <h2>Contact</h2>
  <router-view></router-view>
</template>

<script>

export default {

  name: 'RestaurantsView',

  components: {
  },

  data () {
    return {
      places: []
    }
  },

  /* created () {
    //store.on('retrieve-users', store.users.findAll)
    store.on('users-retrieved', this.update)
  },

  methods: {
    update () {
      this.users = store.users.data
    }
  },*/

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

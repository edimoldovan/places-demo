<template>
  <div class="detail">
    <form class="">
      <input type="text" v-model="name" name="name" value="" placeholder="name">
      <input type="checkbox" id="checkbox" v-model="open">
      <label for="checkbox">Open</label>
      <input type="button" name="save" value="Save" v-on:click="save(name, open)">
    </form>
  </div>
</template>

<script>

import store from '../store'
const { createPlace } = store.actions

export default {

  name: 'AddView',

  components: {
  },

  data () {
    return {
      name: '',
      open: true
    }
  },

  methods: {
    save: (name, open) => {
      createPlace(name, open)
    }
  },

  route: {
    data ({ to }) {
      return {
        name: '',
        open: true
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

    input[type=text] {
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
      padding: 0.5rem;
      width: 32rem;
      display: inline-block;
    }

    input[type=button] {
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
      padding: 0.5rem 1rem;
      float: right;
      background-color: $blue;
      color: $white;
      border: 0;
    }
  }

</style>

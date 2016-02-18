<template>
  <div class="detail">
    <form class="">
      <input type="text" v-model="name" name="name" value="" placeholder="name">
      <input type="checkbox" id="checkbox" v-model="open">
      <label for="checkbox">Open</label>
      <input type="button" name="save" value="Save">
    </form>
  </div>
</template>

<script>

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

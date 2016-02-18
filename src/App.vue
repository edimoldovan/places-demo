<template>
  <div class="container">
    <header>
      <nav>
        <a v-link="{ path: '/', exact: true }">Home</a>
        <a v-link="{ path: '/restaurants' }">Restaurants</a>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="sass?outputStyle=expanded">

  $white: #ffffff;
  $blue: #1C86EE;

  body {
    font: caption;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  header {
    width: 100%;
    float: left;

    nav {
      float: left;

      a {
        color: $blue;
        padding: 1rem;
        float: left;
        font-size: 1.5rem;

        &.active {
          text-decoration: underline;
        }
      }
    }
  }

  .container {
    float: left;
    width: 50rem;
  }

</style>

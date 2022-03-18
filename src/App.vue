<template>
  <div class="nav">
      <Nav/>
  </div>
  <router-view/>
</template>

<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


<script>
import Nav from '../src/components/Navbar.vue'
export default {
  components:{
    Nav
  }
}
</script>

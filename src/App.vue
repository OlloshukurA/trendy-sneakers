<template>
  <div class="nav">
      <Nav/>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
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

*{
  font-family: 'Roboto', sans-serif;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-active{
  opacity: 0;
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

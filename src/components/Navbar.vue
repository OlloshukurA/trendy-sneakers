<template>
<div class=" overflow-hidden">
    <div class="nav shadow-md z-20 relative">
    <div @click="show = !show">
      <MenuAlt4Icon class="w-10 h-10 text-purple-500 fixed cursor-pointer top-4 right-5 transform -rotate-180 overflow-hidden"/>
    </div>
      <div class="nav flex py-10 items-center justify-center px-5 flex-col h-screen bg-black pt-20 overflow-hidden z-50" v-if="show" @click="show = false">
          <router-link to="/" class=" text-white font-bold uppercase text-3xl">shopping</router-link>
          <router-link to="/men" class=" text-white font-bold uppercase py-20 text-3xl">men</router-link>
          <router-link to="/women" class=" text-white font-bold uppercase text-3xl">women</router-link>
          <router-link to="/kids" class=" text-white font-bold uppercase py-20 text-3xl">kids</router-link>
      </div>
  </div>

  <div class="relative z-10">
    <footer class=" flex px-5 justify-between items-start fixed bottom-0 bg-white drop-shadow-md w-full py-2 ">
    <div class="profile"><UserIcon class="icon w-8 h-8 cursor-pointer"/></div>
    <div class="wish"><HeartIcon class="icon w-8 h-8 cursor-pointer relative"/><span class=" absolute top-0 right-4 font-medium text-green-500">0</span></div>
    <div class="bag"><ShoppingBagIcon class="icon w-8 h-8 cursor-pointer"/></div>
  </footer>
  </div>
</div>
</template>

<script>
import { MenuAlt4Icon, UserIcon, HeartIcon,
ShoppingBagIcon } from '@heroicons/vue/outline'
export default {
  components:{
    MenuAlt4Icon,
    UserIcon,
    HeartIcon,
    ShoppingBagIcon,
  },

  data() {
    return {
      show: true
    }
  },

  methods:{

  }
}
</script>

<style>

  footer{
  
      -webkit-box-shadow: 0px -7px 7px -1px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px -7px 7px -1px rgba(34, 60, 80, 0.2);
box-shadow: 0px -7px 7px -1px rgba(34, 60, 80, 0.2);
  }


footer div .icon.active{
  color: blueviolet;
  background: #000;
}
</style>


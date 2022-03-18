<template>
  <button class=" bg-black text-white px-4 py-2 mx-5 mt-5 rounded-sm" @click="$router.back()">Back</button>
  <div class="home px-5 mt-10 grid grid-cols-2 ">
   <div> <img :src="post.img_url" alt="" class=" w-56 h-56 rounded">
   
   <h1 class=" font-medium mt-2">PRODUCT DETAILS </h1>
   <p class=" font-normal opacity-80">Maroon and black printed T-shirt</p>
   <h1 class=" font-medium mt-2">Size & Fit</h1>
   <p class="font-normal opacity-80">The model (height 6') is wearing a size M</p>
   <h1 class="font-medium mt-2">Material & Care</h1>
   <p class="font-normal opacity-80">100% cotton <br> Machine-wash</p>

   <h1 class="font-medium mt-2">Specifications</h1>

   <div class=" mt-2 grid grid-cols-2 gap-x-5">
     <div class="pt-2">
       <p class=" text-sm opacity-60">Fit</p>
       <p class=" font-normal opacity-90 border-b-2 pb-2 mb-10">Regular Fit</p>
     </div>

     <div class="pt-2">
       <p class=" text-sm opacity-60">Length</p>
       <p class=" font-normal opacity-90 border-b-2 pb-2 mb-10">Regular</p>
     </div>

     <div class="pt-2">
       <p class=" text-sm opacity-60">Main Trend</p>
       <p class=" font-normal opacity-90 border-b-2 pb-2 mb-10">Abstract</p>
     </div>

     <div class="pt-2">
       <p class=" text-sm opacity-60">Multipack Set</p>
       <p class=" font-normal opacity-90 border-b-2 pb-2 mb-10">Single</p>
     </div>

     <div class="pt-2">
       <p class=" text-sm opacity-60">Neck</p>
       <p class=" font-normal opacity-90 border-b-2 pb-2 mb-10">Round Neck</p>
     </div>

     <div class="pt-2">
       <p class=" text-sm opacity-60">Occasion</p>
       <p class=" font-normal opacity-90 border-b-2 pb-2 mb-10">Casual</p>
     </div>

     <div class="pt-2">
       <p class=" text-sm opacity-60">Pattern</p>
       <p class=" font-normal opacity-90 border-b-2 pb-2 mb-10">Printed</p>
     </div>

     <div class="pt-2">
       <p class=" text-sm opacity-60"> Coverage</p>
       <p class=" font-normal opacity-90 border-b-2 pb-2 mb-10">Full-Front</p>
     </div>
   </div>
   </div>

    <div class="flex flex-col ml-4">
    <h1 class="font-medium pb-2">{{post.title}}</h1>
    <p class=" font-normal text-gray-400">{{post.des}}</p>
    <button class=" outline-none pl-2 pt-2 mb-2 flex items-center border  rounded w-auto hover:border-black transition-colors"><span>3.7</span><StarIcon class=" w-5 h-5 text-green-500"/><span class=" text-gray-400 ml-2">|</span> <span class="font-normal ml-2">21K Ratings</span></button>
    <div class=" pt-2 border-t-2">
      <span class=" font-medium">$55</span> <span class=" line-through ml-2 font-normal text-gray-400">$110</span> <span class=" font-bold text-yellow-300 ml-2">( 70% OFF )</span>
      <p class=" font-medium text-green-600">inclusive of all taxes</p>

      <h4 class=" font-medium mt-5">SELECT SIZE</h4>

      <div class="sizes border-b-2 pb-4">
        <button class="border p-3 px-4 font-bold mx-2 my-1 focus:border-green-500 rounded-full">S</button>
        <button class="border p-3 px-4 font-bold mx-2 my-1 focus:border-green-500 rounded-full">M</button>
        <button class="border p-3 px-4 font-bold mx-2 my-1 focus:border-green-500 rounded-full">L</button>
        <button class="border p-3 px-4 font-bold mx-2 my-1 focus:border-green-500 rounded-full">XL</button>
        <button class="border p-3 px-4 font-bold mx-2 my-1 focus:border-green-500 rounded-full">XXL</button>
      </div>

      <div class=" flex justify-between items-start flex-col">
        <button class=" flex items-center border border-green-500 w-48 rounded-sm pl-2 font-medium bg-green-500 shadow-sm mt-4 mb-2 "><ShoppingBagIcon class="w-5 h-5 mr-2 text-white"/>ADD TO BAG</button>
        <button class=" flex items-center border border-green-500 w-48 rounded-sm pl-2 font-medium bg-green-100 shadow-sm "><HeartIcon class="w-5 h-5 mr-2"/>WISHLIST</button>
      </div>
    </div>

    
    </div>
  </div>
</template>

<script>
import { StarIcon, ShoppingBagIcon, } from '@heroicons/vue/solid'
import { HeartIcon } from '@heroicons/vue/outline'
import data from '../assets/data.json'
import men from '../assets/men.json'
export default {
    computed: {
    postId(){
      return parseInt(this.$route.params.id)
    },
    
    post(){
      return data.find(post => post.id === this.postId)
    }
  },

  data() {
    return {
      posts: men
    }
  },

  components:{
    StarIcon,
    ShoppingBagIcon,
    HeartIcon
  }
}
</script>

<style>

</style>
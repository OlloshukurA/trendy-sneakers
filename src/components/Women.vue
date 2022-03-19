<template>
   <div class="grid grid-cols-1 gap-y-4  h-auto">
      <router-link :to="'/women/' + post.id" v-for="post in posts" :key="post" class=" flex space-x-3 items-start border w-full hover:bg-gray-100 flex-col rounded-t-sm shadow-md">
          <img :src="post.img_url" alt="" class=" w-full h-56  object-cover">
          <h2 class=" text-xl font-bold ">{{post.title}}</h2>
          <p>{{post.des}}</p>
          <span class=" font-medium">{{post.price}}</span>
      </router-link>
  </div>
</template>

<script>
import data from "@/assets/women.json"
export default {
    data() {
        return {
            posts: data
        }
    },
}
</script>

<style>

</style>
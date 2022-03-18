<template>
  <div class=" grid grid-cols-1 gap-2 h-auto">
      <router-link :to="'/men/' + post.id" v-for="post in posts" :key="post" class=" flex space-x-3 items-start border w-max hover:bg-gray-100 flex-col">
          <img :src="post.img_url" alt="" class=" w-36 h-36 object-cover">
          <h2 class=" text-xl font-bold ">{{post.title}}</h2>
          <p>{{post.des}}</p>
      </router-link>
  </div>
</template>

<script>
import data from "@/assets/data.json"
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
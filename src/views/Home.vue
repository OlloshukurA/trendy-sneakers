<template>
  <div>
    <div class="home">
    <h1 class=" text-red-500 font-bold px-5 py-2 text-2xl">CHOOSE YOUR WANT</h1>
  </div>

  <div class="styles px-5 grid grid-cols-1 gap-y-10">
    <router-link to="/" class=" w-full h-48 bg-gray-100"> <img src="https://threadcurve.com/wp-content/uploads/2020/06/Sneakers-june032020-min.jpg" alt="img" class=" w-full h-56 "></router-link>
    <router-link to="/men" class=" w-full h-48 bg-gray-100"><img src="https://i.insider.com/54fdc12decad042920ceb0c8?width=800&format=jpeg" alt="" class="w-full h-56 rounded-md"></router-link>
    <router-link to="/women" class=" w-full h-48 bg-gray-100"><img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/20/12/lfwstreetstyle2002j.jpg" alt="" class="w-full h-56 rounded-md"></router-link>
    <router-link to="/kids" class=" w-full h-48 bg-gray-100"><img src="https://image.shutterstock.com/image-photo/two-beautiful-teen-girls-boys-260nw-1045137898.jpg" alt="" class="w-full h-56 rounded-md"></router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    data() {
      return {
        "img": "https://threadcurve.com/wp-content/uploads/2020/06/Sneakers-june032020-min.jpg"
      }
    },
  }
}
</script>

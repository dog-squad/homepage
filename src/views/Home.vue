<template>
  <div class="justify-content-center align-self-md-center align-self-xl-center">
    <div class="row">
      <div class="col-12 text-center my-4">
        <h1 class="display-2">dogsquad software</h1>
        <p>We design, build and deliver software</p>
      </div>
    </div>
    <div class="row my-sm-5 my-xl-5 ">
      <div class="col-12 col-md-4 col-xl-4 mb-4">
        <author :author="bluedog" />
      </div>
      <div class="col-12 col-md-4 col-xl-4 mb-4">
        <author :author="zebra" />
      </div>
      <div class="col-12 col-md-4 col-xl-4 mb-4">
        <author :author="plexcon" />
      </div>
    </div>
  </div>
</template>

<script>
import Author from "@/components/Author.vue";

export default {
  name: "Home",
  data: function() {
    return {
      bluedog: {
        avatar: "bluedog.jpg",
        name: "bluedog",
        about: "Developer/DevOps",
      },
      zebra: {
        avatar: "zebra.jpg",
        name: "Zebra",
        about: "Developer",
      },
      plexcon: {
        avatar: "plexcon.png",
        name: "Plexcon",
        about: "SysAdmin/Designer",
      },
    };
  },
  components: {
    Author,
  },
};
</script>

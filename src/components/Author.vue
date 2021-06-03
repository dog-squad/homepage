<template>
  <div class="text-center">
    <img
      :src="require(`@/assets/${author.avatar}`)"
      class="rounded-circle h-25 w-25 mx-auto d-block"
    />
    <h3 class="my-2">{{ author.name }}</h3>
    <p>{{ author.about }}</p>
    <router-link class="view-author" :to="'/about/' + author.name">
      <font-awesome-icon :icon="['fas', 'arrow-right']" /> View
    </router-link>
  </div>
</template>

<script>
export default {
  name: "author",
  props: {
    author: Object,
  },
};
</script>

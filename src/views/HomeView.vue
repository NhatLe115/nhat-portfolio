<template>
  <div class="home">
    <Banner msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
  },
}
</script>

<template>
  <div class="home">
    <Banner />
    <Introduce></Introduce>
    <Skills></Skills>
    <Projects></Projects>
    <Experience></Experience>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Introduce from '@/components/Introduce.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Experience from '@/components/Experience.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Introduce,
    Skills,
    Projects,
    Experience,
  },
}
</script>

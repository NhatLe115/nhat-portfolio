<template>
  <section id="projects">
    <div class="main-section">
      <div class="title" ref="title">
        <div class="section-title color-white">CASE STUDIES</div>
        <div class="main-title-name color-white">Projects.</div>
      </div>
      <div class="section-paragragh color-white mt-4" ref="main-paragragh">
        These projects demonstrate my expertise with practical examples of some
        of my work, including brief descriptions and links to code repositories
        and live demos. They showcase my ability to tackle intricate challenges,
        adapt to various technologies, and efficiently oversee projects.
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#projects {
  background: #000;
  padding-bottom: 140px;
}
</style>
<script>
import checkAnimation from '@/ultils/checkAnimation.js'
export default {
  data() {},
  methods: {
    checkAnimation() {
      let listRef = this.$refs
      checkAnimation(listRef)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkAnimation)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkAnimation)
  },
}
</script>

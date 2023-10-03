<template>
  <div id="skills">
    <section class="main-section">
      <div class="title" ref="title">
        <div class="section-title color-white">MY SKILLS</div>
        <div class="main-title-name color-white">Technologies.</div>
      </div>
      <div class="skills-item"></div>
    </section>
  </div>
</template>
<style lang="scss">
#skills {
  background-image: url('@/assets/images/skill-bg.jpg');
  background-position: bottom center;
  filter: grayscale(100%);
  padding: 60px;
  padding-top: 0px;
  .skills-item {
    margin-top: 60px;
    height: 260px;
    width: 100%;
  }
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

<template>
  <section id="introduce" class="main-section">
    <div class="title" ref="title">
      <div class="section-title">INTRODUCTION</div>
      <div class="main-title-name">Overview.</div>
    </div>
    <div class="section-paragragh">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente
      ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat
      alias accusamus voluptas autem! Alias odit voluptates in totam vitae
      dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati
      voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum
      ipsum doloribus.
    </div>
    <div class="list-skill" ref="list-skill">
      <div class="skill-item">
        <img src="@/assets/images/frontend.png" />
        <span class="skill-name">Frontend Developer</span>
      </div>
      <div class="skill-item">
        <img src="@/assets/images/backend.png" />
        <span class="skill-name">Backend Developer</span>
      </div>
      <div class="skill-item">
        <img src="@/assets/images/ux.png" />
        <span class="skill-name">UX/UI Design</span>
      </div>
      <div class="skill-item">
        <img src="@/assets/images/prototyping.png" />
        <span class="skill-name">Software Prototype</span>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.list-skill {
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
  .skill-item {
    width: 22%;
    background: rgb(51, 51, 51);
    padding: 48px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 40px 30px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 0px 40px 30px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 40px 30px rgba(0, 0, 0, 0.3);
    .skill-name {
      margin-top: 20px;
      text-align: center;
    }
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

<template>
  <section
    ref="banner-img"
    @mouseleave="handleMouseLeave"
    class="banner flex justify-center"
  >
    <div ref="left-img-banner" class="left-content">
      <div class="left-text">
        <div class="text-intro-div">
          <p class="intro-banner" ref="banner-left-title">
            &lt; UX/UI Design &gt;
          </p>
        </div>
        <span class="sub-text"
          >Product designer specialising in UI design and design systems.</span
        >
      </div>
    </div>
    <div ref="right-img-banner" class="right-content">
      <div class="right-text">
        <div class="text-intro-div">
          <p class="intro-banner" ref="banner-right-title">&lt; Coder &gt;</p>
        </div>
        <span class="sub-text"
          >Front end developer who writes clean, elegant and efficient
          code.</span
        >
      </div>
    </div>
  </section>
</template>

<script>
import checkAnimation from '@/ultils/checkAnimation.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {}
  },
  methods: {
    calculateWidthElement(mouseX) {
      // const windowSide = window.innerWidth
      const windowSide = this.$refs['banner-img'].offsetWidth
      const defaultWidth = windowSide * 0.5
      if (windowSide / 2 > mouseX) {
        const calcVal = defaultWidth - mouseX
        this.$refs['left-img-banner'].style.width =
          calcVal + defaultWidth + 'px'
        this.$refs['right-img-banner'].style.width =
          defaultWidth - calcVal + 'px'
        const opacityVal = mouseX / defaultWidth
        this.$refs['right-img-banner'].style.opacity = opacityVal
      } else {
        const calcVal = mouseX - defaultWidth
        this.$refs['left-img-banner'].style.width =
          defaultWidth - calcVal + 'px'
        this.$refs['right-img-banner'].style.width =
          defaultWidth + calcVal + 'px'
        const opacityVal = (windowSide - mouseX) / defaultWidth
        this.$refs['left-img-banner'].style.opacity = opacityVal
      }
    },
    handleMouseMove(event) {
      const mouseX = event.clientX // X-coordinate of the mouse pointer
      this.calculateWidthElement(mouseX)
    },
    handleMouseLeave() {
      // const windowSide = window.innerWidth
      const windowSide = this.$refs['banner-img'].offsetWidth
      const defaultWidth = windowSide * 0.5
      this.$refs['left-img-banner'].style.width = defaultWidth + 'px'
      this.$refs['right-img-banner'].style.width = defaultWidth + 'px'
      this.$refs['left-img-banner'].style.opacity = this.$refs[
        'right-img-banner'
      ].style.opacity = 1
    },
    checkAnimation() {
      let listRef = this.$refs
      checkAnimation(listRef)
    },
  },
  mounted() {
    this.$refs['banner-img'].addEventListener('mousemove', this.handleMouseMove)
    this.checkAnimation()
  },
  beforeDestroy() {
    this.$refs['banner-img'].removeEventListener(
      'mousemove',
      this.handleMouseMove
    )
  },
}
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  height: calc(100vh - 105px); // minus header
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  .left-content {
    position: absolute;
    width: 50%;
    opacity: 1;
    background-image: url('@/assets/images/main-banner-left.png');
    // filter: grayscale(100%);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: calc((100vw - 100vh + 110px) / 2) center;
    height: 100%;
    left: 0;
    top: 0;
    transition: 1.5s;
  }
  .right-content {
    position: absolute;
    width: 50%;
    opacity: 1;
    background-image: url('@/assets/images/main-banner-right.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right calc((100vw - 100vh + 110px) / 2) center;
    height: 100%;
    right: 0;
    top: 0;
    transition: 1.5s;
  }
  .left-text {
    margin: 100px 0px 0px 40px;
    max-width: 400px;
    text-align: start;
  }
  .right-text {
    float: right;
    margin: 100px 40px 0px 0px;
    max-width: 400px;
    text-align: end;
  }
  .intro-banner {
    font-weight: bolder;
    font-size: 48px;
    font-family: 'Proxima', sans-serif;
    height: auto;
  }
  .sub-text {
    font-size: 18px;
    font-weight: 100;
    line-height: 26px;
  }
  .text-intro-div {
    opacity: 0;
    animation: fadeIn 2s forwards 1s; /* 2s duration, 1s delay */
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
}
</style>

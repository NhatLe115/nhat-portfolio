<template>
  <section id="exp">
    <div class="medium-section">
      <div class="title" ref="title">
        <div class="section-title">WHAT I'VE DONE SO FAR</div>
        <div class="main-title-name">Work Experience.</div>
      </div>
      <div class="list-exp">
        <div class="main-line"></div>
        <div class="list-exp-display">
          <div class="exp-item">
            <div class="name-exp" ref="exp-left-1">
              <div class="main-name-exp">Front-End Developer</div>
              <div class="sub-name-exp">Genki System</div>
            </div>
            <div class="cycler-element" ref="cycler-exp-1">
              <div class="sub-cycler-element">
                <img src="@/assets/images/exp/coverhunt.png" />
              </div>
            </div>
            <div class="time" ref="exp-right-1">Dec 2020 - Now</div>
          </div>
          <div class="exp-item">
            <div class="time text-right" ref="exp-left-2">Dec 2020 - Now</div>
            <div class="cycler-element" ref="cycler-exp-2">
              <div class="sub-cycler-element">
                <img src="@/assets/images/exp/coverhunt.png" />
              </div>
            </div>
            <div class="name-exp" ref="exp-right-2">
              <div class="main-name-exp">Front-End Developer</div>
              <div class="sub-name-exp">Genki System</div>
            </div>
          </div>
          <div class="exp-item">
            <div class="name-exp" ref="exp-left-3">
              <div class="main-name-exp">My Resume</div>
              <div class="sub-name-exp">Download here</div>
            </div>
            <div class="cycler-element" ref="cycler-exp-3">
              <div class="sub-cycler-element">
                <img src="@/assets/images/exp/coverhunt.png" />
              </div>
            </div>
            <div class="time" ref="exp-right-3">Now</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#exp {
  border-top-left-radius: 100px;
  background: #fff;
  margin-top: -90px;
  background-image: linear-gradient(
    137deg,
    rgba(244, 244, 246, 0.5) 60%,
    rgba(10, 10, 10, 0.9) 60%
  );
  padding-bottom: 40px;
  .list-exp {
    position: relative;
    .main-line {
      width: 4px;
      height: 600px;
      margin: 40px auto;
      margin-top: 60px;
      background: linear-gradient(
        180deg,
        rgba(66, 66, 66, 0.8) 40%,
        rgba(66, 66, 66, 0.4) 100%
      );
    }
    .list-exp-display {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .exp-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 36px 0px;
        .name-exp {
          width: calc(50% - 60px);
          padding: 24px;
          border-radius: 5px;
          background: rgb(234, 234, 236);
          box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
          .main-name-exp {
            font-weight: 900;
            font-size: 28px;
            font-family: Beckman;
          }
          .sub-name-exp {
            margin-top: 10px;
            color: rgb(153, 153, 161);
            font-size: 16px;
            font-weight: 600;
          }
        }
        .time {
          flex-grow: 1;
          font-size: 24px;
          font-weight: 900;
          color: rgb(138, 138, 138);
        }
        .text-right {
          text-align: end;
        }
        .cycler-element {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0px 20px;
          background: rgb(187, 187, 187);
          display: flex;
          justify-content: center;
          align-items: center;
          .sub-cycler-element {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: rgb(51, 51, 51);
            img {
              width: 100%;
            }
          }
        }
      }
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

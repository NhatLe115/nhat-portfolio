<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view />
  </div>
</template>
<style lang="scss" src="@/assets/scss/app.scss"></style>
<script>
import HeaderView from './views/HeaderView.vue'
export default {
  data() {
    return {}
  },
  components: {
    HeaderView,
  },
}
</script>

<template>
  <header id="header">
    <div class="header flex flex-row justify-between p-4">
      <div class="logo max-w-[80px] ml-8">
        <img src="@/assets/logo.png" class="max-w-[100%]" alt="logo" />
      </div>
      <nav
        class="flex flex-row justify-between text-2xl font-bold mr-8 items-center"
      >
        <div
          id="about-item-menu"
          class="px-4 button-nav"
          @click="scrollToElement('introduce')"
        >
          OVERVIEW
        </div>
        <div
          id="projects-item-menu"
          class="px-4 button-nav"
          @click="scrollToElement('skills')"
        >
          SKILLS
        </div>
        <div
          id="projects-item-menu"
          class="px-4 button-nav"
          @click="scrollToElement('projects')"
        >
          PROJECTS
        </div>
        <div
          id="experience-item-menu"
          class="px-4 button-nav"
          @click="scrollToElement('exp')"
        >
          EXPERIENCE
        </div>
      </nav>
    </div>
    <div class="space"></div>
  </header>
</template>
<style lang="scss" src="./header.scss"></style>
<script src="./header.js"></script>

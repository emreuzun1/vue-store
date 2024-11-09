<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar/Navbar.vue'
</script>

<template>
  <main class="bg-background">
    <Navbar />
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100vw;
  height: 100vh;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar/Navbar.vue'
</script>

<template>
  <main>
    <Navbar />
    <RouterView />
  </main>
</template>

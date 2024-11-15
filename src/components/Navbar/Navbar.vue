<template>
  <nav class="bg-surface">
    <div class="navbar-content">
      <h3>V-STORE</h3>
      <Input
        name="search"
        placeholder="Search for Product"
        value=""
        class="search-input"
      />
      <div class="user-container">
        <v-icon icon="fas fa-home" />
        <v-btn>Profile <v-icon icon="mdi-arrow-left" start></v-icon> </v-btn>
        <button>Cart</button>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import Input from '../Input/Input.vue'
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1rem;
  .navbar-content {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .search-input {
      width: 50%;
      padding: 0.25rem;
    }
    .user-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
}
</style>

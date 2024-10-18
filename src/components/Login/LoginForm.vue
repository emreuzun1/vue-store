<template>
  <form @submit.prevent="handleSubmit">
    <label for="username">Username</label>
    <input id="username" type="text" v-model="username" />
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>
<script setup lang="ts">
import { loginService } from '@/api/services/auth'
import { ref } from 'vue'
const username = ref('')
const password = ref('')

const handleSubmit = async () => {
  if (username.value && password.value) {
    await loginService({
      username: username.value,
      password: password.value,
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
<style scoped></style>

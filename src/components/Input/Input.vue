<template>
  <div>
    <input v-bind="props" />
    <v-icon icon="fa:fas fa-search"></v-icon>
  </div>
</template>
<script lang="ts" setup>
import type { InputProps } from '@/interfaces/Input.interface'

const props = defineProps<InputProps>()
</script>
<style lang="scss"></style>

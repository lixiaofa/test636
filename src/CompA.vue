<script setup lang="ts">
import { ref } from 'vue'
/* import { watchEffect } from 'vue'
interface Props {
  input: string
}

const {
  input
} = defineProps<Props>()

watchEffect(() => {
  // 会在 props 变化时打印
  console.log(input)
}) */

const value = ref(1)
const clickhandler = () => {
  value.value++
}
</script>

<template>
  <div>
    子组件
    <button @click="clickhandler">add</button>
    <slot name="header" :value="value" :count="7"></slot>
  </div>

  <!-- {{ input }} -->
</template>

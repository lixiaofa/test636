<script setup lang="ts">
import { ref } from 'vue'


const modelValue = ref('1')

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const updateModelValue = (val) => {
  console.log('val', val)
  emit('update:modelValue', modelValue.value)
}
</script>

<template>
  <div>
    子组件

    <slot name="header" :modelValue="modelValue" @update:modelValue="updateModelValue"></slot>
  </div>
</template>

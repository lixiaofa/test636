<template>
  <ElInput v-model="input" :autofocus="true" @blur="onBlur" />
</template>

<script setup lang="ts">

import type { InputCellProps, InputCellEmits } from './input-cell'
import { useInputCell } from './use-input-cell'


const props = defineProps<InputCellProps>()
const emit = defineEmits<InputCellEmits>()
const { input, onBlur } = useInputCell(props, emit)





</script>

<style lang="scss"></style>

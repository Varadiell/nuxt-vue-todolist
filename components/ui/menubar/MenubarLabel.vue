<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { MenubarLabel, type MenubarLabelProps } from 'radix-vue'

const props = defineProps<MenubarLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
</script>

<template>
  <MenubarLabel :class="cn('tw-px-2 tw-py-1.5 tw-text-sm tw-font-semibold', inset && 'tw-pl-8', props.class)">
    <slot />
  </MenubarLabel>
</template>

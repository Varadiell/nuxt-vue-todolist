<script setup lang="ts">
import { cn } from '@/lib/utils'
import { MenubarSeparator, type MenubarSeparatorProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSeparator :class=" cn('tw--mx-1 tw-my-1 tw-h-px tw-bg-muted', props.class)" v-bind="forwardedProps" />
</template>

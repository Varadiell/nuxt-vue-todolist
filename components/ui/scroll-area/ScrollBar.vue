<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ScrollAreaScrollbar, type ScrollAreaScrollbarProps, ScrollAreaThumb } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<ScrollAreaScrollbarProps & { class?: HTMLAttributes['class'] }>(), {
  orientation: 'vertical',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="delegatedProps"
    :class="
      cn('tw-flex tw-touch-none tw-select-none tw-transition-colors',
         orientation === 'vertical'
           && 'tw-h-full tw-w-2.5 tw-border-l tw-border-l-transparent tw-p-px',
         orientation === 'horizontal'
           && 'tw-h-2.5 tw-flex-col tw-border-t tw-border-t-transparent tw-p-px',
         props.class)"
  >
    <ScrollAreaThumb class="tw-relative tw-flex-1 tw-rounded-full tw-bg-border" />
  </ScrollAreaScrollbar>
</template>

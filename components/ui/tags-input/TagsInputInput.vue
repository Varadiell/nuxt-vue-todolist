<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TagsInputInput, type TagsInputInputProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TagsInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputInput v-bind="forwardedProps" :class="cn('tw-text-sm tw-min-h-6 focus:tw-outline-none tw-flex-1 tw-bg-transparent tw-px-1', props.class)" />
</template>

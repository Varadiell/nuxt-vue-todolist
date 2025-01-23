<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TagsInputItem, type TagsInputItemProps, useForwardProps } from 'radix-vue'

import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItem v-bind="forwardedProps" :class="cn('tw-flex tw-h-6 tw-items-center tw-rounded tw-bg-secondary data-[state=active]:tw-ring-ring data-[state=active]:tw-ring-2 data-[state=active]:tw-ring-offset-2 tw-ring-offset-background', props.class)">
    <slot />
  </TagsInputItem>
</template>

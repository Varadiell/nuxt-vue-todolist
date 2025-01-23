<script setup lang="ts">
import { cn } from '@/lib/utils'
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput v-bind="forwardedProps" :class="cn('tw-relative tw-text-center focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-relative focus:tw-z-10 tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-border-y tw-border-r tw-border-input tw-text-sm tw-transition-all first:tw-rounded-l-md first:tw-border-l last:tw-rounded-r-md', props.class)" />
</template>

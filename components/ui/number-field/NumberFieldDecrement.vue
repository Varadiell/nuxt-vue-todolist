<script setup lang="ts">
import type { NumberFieldDecrementProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Minus } from 'lucide-vue-next'
import { NumberFieldDecrement, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<NumberFieldDecrementProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldDecrement data-slot="decrement" v-bind="forwarded" :class="cn('tw-absolute tw-top-1/2 tw--translate-y-1/2 tw-left-0 tw-p-3 disabled:tw-cursor-not-allowed disabled:tw-opacity-20', props.class)">
    <slot>
      <Minus class="tw-h-4 tw-w-4" />
    </slot>
  </NumberFieldDecrement>
</template>

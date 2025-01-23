<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Search } from 'lucide-vue-next'
import { ComboboxInput, type ComboboxInputProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="tw-flex tw-items-center tw-border-b tw-px-3" cmdk-input-wrapper>
    <Search class="tw-mr-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50" />
    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      :class="cn('tw-flex tw-h-11 tw-w-full tw-rounded-md tw-bg-transparent tw-py-3 tw-text-sm tw-outline-none placeholder:tw-text-muted-foreground disabled:tw-cursor-not-allowed disabled:tw-opacity-50', props.class)"
    />
  </div>
</template>

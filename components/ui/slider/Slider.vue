<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SliderRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="cn(
      'tw-relative tw-flex tw-w-full tw-touch-none tw-select-none tw-items-center data-[orientation=vertical]:tw-flex-col data-[orientation=vertical]:tw-w-2 data-[orientation=vertical]:tw-h-full',
      props.class,
    )"
    v-bind="forwarded"
  >
    <SliderTrack class="tw-relative tw-h-2 tw-w-full data-[orientation=vertical]:tw-w-2 tw-grow tw-overflow-hidden tw-rounded-full tw-bg-secondary">
      <SliderRange class="tw-absolute tw-h-full data-[orientation=vertical]:tw-w-full tw-bg-primary" />
    </SliderTrack>
    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      class="tw-block tw-h-5 tw-w-5 tw-rounded-full tw-border-2 tw-border-primary tw-bg-background tw-ring-offset-background tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50"
    />
  </SliderRoot>
</template>

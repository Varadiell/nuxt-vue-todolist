<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation } = useCarousel()
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cn(
      'tw-min-w-0 tw-shrink-0 tw-grow-0 tw-basis-full',
      orientation === 'horizontal' ? 'tw-pl-4' : 'tw-pt-4',
      props.class,
    )"
  >
    <slot />
  </div>
</template>

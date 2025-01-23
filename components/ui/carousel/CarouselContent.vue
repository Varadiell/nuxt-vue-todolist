<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { useCarousel } from './useCarousel'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<WithClassAsProps>()

const { carouselRef, orientation } = useCarousel()
</script>

<template>
  <div ref="carouselRef" class="tw-overflow-hidden">
    <div
      :class="
        cn(
          'tw-flex',
          orientation === 'horizontal' ? 'tw--ml-4' : 'tw--mt-4 tw-flex-col',
          props.class,
        )"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>

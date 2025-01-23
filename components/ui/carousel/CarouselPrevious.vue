<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn(
      'tw-touch-manipulation tw-absolute tw-h-8 tw-w-8 tw-rounded-full tw-p-0',
      orientation === 'horizontal'
        ? 'tw--left-12 tw-top-1/2 tw--translate-y-1/2'
        : 'tw--top-12 tw-left-1/2 tw--translate-x-1/2 tw-rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft class="tw-h-4 tw-w-4 tw-text-current" />
      <span class="tw-sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>

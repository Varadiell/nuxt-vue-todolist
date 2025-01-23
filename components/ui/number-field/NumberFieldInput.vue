<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { NumberFieldInput } from 'radix-vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :class="cn('tw-flex tw-h-10 tw-w-full tw-rounded-md tw-border tw-border-input tw-bg-background tw-py-2 tw-text-sm tw-text-center tw-ring-offset-background placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50', props.class)"
  />
</template>

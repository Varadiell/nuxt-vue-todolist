<script setup lang="ts">
import { cn } from '@/lib/utils'
import { GripVertical } from 'lucide-vue-next'
import { SplitterResizeHandle, type SplitterResizeHandleEmits, type SplitterResizeHandleProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SplitterResizeHandleProps & { class?: HTMLAttributes['class'], withHandle?: boolean }>()
const emits = defineEmits<SplitterResizeHandleEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterResizeHandle v-bind="forwarded" :class="cn('tw-relative tw-flex tw-w-px tw-items-center tw-justify-center tw-bg-border after:tw-absolute after:tw-inset-y-0 after:tw-left-1/2 after:tw-w-1 after:tw--translate-x-1/2 focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-1 [&[data-orientation=vertical]]:tw-h-px [&[data-orientation=vertical]]:tw-w-full [&[data-orientation=vertical]]:after:tw-left-0 [&[data-orientation=vertical]]:after:tw-h-1 [&[data-orientation=vertical]]:after:tw-w-full [&[data-orientation=vertical]]:after:tw--translate-y-1/2 [&[data-orientation=vertical]]:after:tw-translate-x-0 [&[data-orientation=vertical]>div]:tw-rotate-90', props.class)">
    <template v-if="props.withHandle">
      <div class="tw-z-10 tw-flex tw-h-4 tw-w-3 tw-items-center tw-justify-center tw-rounded-sm tw-border tw-bg-border">
        <GripVertical class="tw-h-2.5 tw-w-2.5" />
      </div>
    </template>
  </SplitterResizeHandle>
</template>

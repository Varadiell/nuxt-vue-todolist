<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-vue-next'
import { MenubarSubTrigger, type MenubarSubTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarSubTriggerProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[state=open]:tw-bg-accent data-[state=open]:tw-text-accent-foreground',
      inset && 'tw-pl-8',
      props.class,
    )"
  >
    <slot />
    <ChevronRight class="tw-ml-auto tw-h-4 tw-w-4" />
  </MenubarSubTrigger>
</template>

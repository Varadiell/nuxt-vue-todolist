<script setup lang="ts">
  import { List } from 'lucide-vue-next'
  const route = useRoute()
  const notActive = (routeName: string) => {
    return route.name !== routeName
  }
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav class="gap-6 text-lg font-medium flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a href="/" class="flex items-center gap-2 text-lg font-semibold md:text-base">
          <List class="h-6 w-6" />
        </a>
        <a href="/" class="transition-colors hover:text-foreground" :class="{ 'text-muted-foreground': notActive('index') }">
          Home
        </a>
        <a href="/todolist" class="transition-colors hover:text-foreground" :class="{ 'text-muted-foreground': notActive('todolist') }">
          TodoList
        </a>
      </nav>
    </header>
    <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div class="mx-auto grid w-full max-w-6xl items-start gap-6">
        <div class="grid gap-6">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

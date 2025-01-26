<script setup lang="ts">
  import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
  definePageMeta({
    middleware: 'route'
  })
</script>

<template>
  <div>
    <Card>
      <CardHeader>
        <CardTitle>Home</CardTitle>
        <CardDescription>
          Welcome!
        </CardDescription>
      </CardHeader>
      <CardFooter class="border-t px-6 py-4 flex-col gap-1 items-start">
        <NuxtLink to="/kamoulox">
          <Button>Go to Error</Button>
        </NuxtLink>
      </CardFooter>
    </Card>
  </div>
</template>

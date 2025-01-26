<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

  definePageMeta({
    middleware: 'route'
  })
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Home</CardTitle>
      <CardDescription>
        Welcome!
      </CardDescription>
    </CardHeader>
    <CardFooter class="border-t px-6 py-4">
      <Button>Go to TodoList</Button>
    </CardFooter>
  </Card>
</template>

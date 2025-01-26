<script setup lang="ts">
  import type { NuxtError } from '#app'
  defineProps({
    error: Object as () => NuxtError
  })
  const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <Card>
      <CardHeader>
        <CardTitle>{{error?.statusCode}}</CardTitle>
        <CardDescription>
          Oh no, an error!
        </CardDescription>
      </CardHeader>
      <CardFooter class="border-t px-6 py-4">
        <Button @click="handleError">Clear errors</Button>
      </CardFooter>
    </Card>
  </NuxtLayout>
</template>

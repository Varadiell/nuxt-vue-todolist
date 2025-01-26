<script setup lang="ts">
  definePageMeta({
    middleware: 'route'
  })
  const { data } = await useFetch('/api/helloworld')
</script>

<template>
  <div>
    <Card>
      <CardHeader>
        <CardTitle>Fetch</CardTitle>
        <CardDescription>
          {{ data }}
        </CardDescription>
      </CardHeader>
    </Card>
  </div>
</template>

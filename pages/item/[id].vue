<script setup lang="ts">
  definePageMeta({
    middleware: 'route'
  })
  const route = useRoute()
  const todoList = useTodoList()
  const itemIndex = Number(route.params.id) || 0;
</script>

<template>
  <div>
    <Card>
      <CardHeader>
        <CardTitle>Item #{{ itemIndex }}</CardTitle>
        <CardDescription>
          {{ todoList[itemIndex]?.description }}
        </CardDescription>
      </CardHeader>
    </Card>
  </div>
</template>

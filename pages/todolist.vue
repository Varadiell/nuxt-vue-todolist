<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
  import { Input } from '@/components/ui/input'
  definePageMeta({
    middleware: 'route'
  })
  const todoList = useTodoList()
  const todo = useTodo()
  const addTodo = () => {
    todoList.value.push({
      description: todo.value,
      completed: false
    })
    todo.value = ''
  }
  const removeTodo = (index: number) => {
    todoList.value.splice(index, 1)
  }
</script>

<template>
  <div class="grid gap-6">
    <Card>
      <form action="" @submit.prevent="addTodo">
        <CardHeader>
          <CardTitle>Add Item</CardTitle>
          <CardDescription>
            Add an item to the todo list.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input name="todo" placeholder="Item description" type="text" v-model="todo" autocomplete="off" />
        </CardContent>
        <CardFooter class="border-t px-6 py-4">
          <Button type="submit" :disabled="!todo">Add</Button>
        </CardFooter>
      </form>
    </Card>
    <Card>
      <CardHeader class="px-7">
        <CardTitle>List</CardTitle>
        <CardDescription>
          Content of the todo list.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div v-if="todoList.length === 0">
          The todo list is empty.
        </div>
        <Table v-else>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>
                Description
              </TableHead>
              <TableHead class="text-right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(todoItem, index) in todoList">
              <TableCell>
                <div class="font-medium">
                  {{index}}
                </div>
              </TableCell>
              <TableCell>
                {{todoItem.description}}
              </TableCell>
              <TableCell class="flex gap-1 justify-end">
                <NuxtLink :to="`/item/${index}`">
                  <Button>See item</Button>
                </NuxtLink>
                <Button variant="destructive" @click="removeTodo(index)">Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
</template>

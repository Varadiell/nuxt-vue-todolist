<script setup lang="ts">
  import { ref } from 'vue';
  import { Button } from '@/components/ui/button'
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
  import { Input } from '@/components/ui/input'

  const todoList = ref<Array<{ description: string, completed: boolean }>>([])
  const todo = ref('')
  const addTodo = () => {
    todoList.value.push({
      description: todo.value,
      completed: false
    })
    todo.value = ''
  }
</script>

<template>
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
        <Button type="submit">Add</Button>
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
          <TableRow v-for="todoItem in todoList">
            <TableCell>
              <div class="font-medium">
                {{todoList.indexOf(todoItem) + 1}}
              </div>
            </TableCell>
            <TableCell>
              {{todoItem.description}}
            </TableCell>
            <TableCell class="text-right">
              <Button size="sm">Done</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</template>

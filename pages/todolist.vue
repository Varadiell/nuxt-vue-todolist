<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
  import { Input } from '@/components/ui/input'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Add Item</CardTitle>
      <CardDescription>
        Add an item to the todo list.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <Input placeholder="Item description" />
      </form>
    </CardContent>
    <CardFooter class="border-t px-6 py-4">
      <Button>Add</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader class="px-7">
      <CardTitle>List</CardTitle>
      <CardDescription>
        Content of the todo list.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Table>
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
          <TableRow>
            <TableCell>
              <div class="font-medium">
                1
              </div>
            </TableCell>
            <TableCell>
              Finish this project
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

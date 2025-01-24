<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
  import { Input } from '@/components/ui/input'
  import { List } from 'lucide-vue-next'
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav class="gap-6 text-lg font-medium flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a href="#" class="flex items-center gap-2 text-lg font-semibold md:text-base">
          <List class="h-6 w-6" />
        </a>
        <a href="#" class="text-muted-foreground transition-colors hover:text-foreground">
          Home
        </a>
        <a href="#" class="text-foreground transition-colors hover:text-foreground">
          TodoList
        </a>
      </nav>
    </header>
    <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div class="mx-auto grid w-full max-w-6xl items-start gap-6">
        <div class="grid gap-6">
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
        </div>
      </div>
    </main>
  </div>
</template>

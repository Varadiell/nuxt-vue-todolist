export const useTodoList = () => useState<Array<{ description: string; completed: boolean }>>('todoList', () => [])
export const useTodo = () => useState<string>('todo', () => 'Finish this project')

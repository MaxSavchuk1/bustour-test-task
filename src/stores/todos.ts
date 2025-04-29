import { Todo, TodoForm } from '@/helpers/types'

export const useTodosStore = defineStore('todos-store', () => {
  const todos = ref<Todo[]>(getData())

  const todoForm = ref<TodoForm>(defaultForm())

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: todoForm.value.title,
      description: todoForm.value.description,
      assignedUser: {
        id: Date.now() + 1,
        name: todoForm.value.name,
        email: todoForm.value.email
      }
    }
    todos.value.push(newTodo)
  }

  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  const updateTodo = (id: number) => {
    const index = todos.value.findIndex(t => t.id === id)
    todos.value[index] = {
      ...todos.value[index],
      title: todoForm.value.title,
      description: todoForm.value.description,
      assignedUser: {
        ...todos.value[index].assignedUser,
        name: todoForm.value.name,
        email: todoForm.value.email
      }
    }
  }

  const setForm = (id: number) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todoForm.value.title = todo.title
      todoForm.value.description = todo.description
      todoForm.value.name = todo.assignedUser.name
      todoForm.value.email = todo.assignedUser.email
    }
  }

  const resetForm = () => {
    todoForm.value = defaultForm()
  }

  return {
    todos,
    todoForm,
    setForm,
    resetForm,
    addTodo,
    deleteTodo,
    updateTodo
  }
})

function getData(): Todo[] {
  return [
    {
      id: 1,
      title: 'sample text',
      description: 'sample',
      assignedUser: {
        id: 1,
        name: 'sample',
        email: 'sample@sample.com'
      }
    },
    {
      id: 2,
      title: 'sample text2',
      description: 'sample2',
      assignedUser: {
        id: 2,
        name: 'sample2',
        email: 'sampl2e@samp2le.com'
      }
    }
  ]
}

function defaultForm(): TodoForm {
  return {
    title: '',
    description: '',
    name: '',
    email: ''
  }
}

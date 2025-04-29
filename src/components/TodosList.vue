<script setup lang="ts">
const todosStore = useTodosStore()
const { todos, todoForm } = storeToRefs(todosStore)
const { addTodo, deleteTodo, updateTodo, setForm, resetForm } = todosStore

const dialogVisible = ref(false)
const editedTodoId = ref<number | null>()

const editTodo = (id: number) => {
  setForm(id)
  editedTodoId.value = id
  dialogVisible.value = true
}

const confirmHandler = () => {
  editedTodoId.value ? updateTodo(editedTodoId.value) : addTodo()
  dialogVisible.value = false
}

watch(dialogVisible, v => {
  if (!v) {
    resetForm()
    editedTodoId.value = null
  }
})
</script>

<template>
  <div class="wrapper">
    <h2>Todos list subtask</h2>
    <div class="list-container">
      <el-table :data="todos" max-height="300" empty-text="No data">
        <el-table-column
          prop="title"
          label="Title"
          min-width="150"
          show-overflow-tooltip
        />

        <el-table-column
          prop="description"
          label="Description"
          min-width="250"
          show-overflow-tooltip
        />

        <el-table-column
          prop="assignedUser.name"
          label="User name"
          min-width="150"
          show-overflow-tooltip
        />

        <el-table-column label="Operations" width="150">
          <template #default="{ row }">
            <el-button size="small" @click.prevent="editTodo(row.id)">
              Edit
            </el-button>

            <el-button
              type="danger"
              size="small"
              @click.prevent="deleteTodo(row.id)"
            >
              Remove
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-button @click="dialogVisible = true"> Add Todo </el-button>

      <!-- TODO DIALOG -->

      <el-dialog
        v-model="dialogVisible"
        :title="editedTodoId ? 'Edit Todo' : 'Add Todo'"
        width="500"
      >
        <el-form :model="todoForm">
          <el-form-item label="Title" label-width="100px">
            <el-input
              v-model="todoForm.title"
              maxlength="40"
              autocomplete="off"
            />
          </el-form-item>

          <el-form-item label="Description" label-width="100px">
            <el-input
              v-model="todoForm.description"
              :rows="2"
              type="textarea"
              maxlength="300"
            />
          </el-form-item>

          <el-form-item label="User name" label-width="100px">
            <el-input v-model="todoForm.name" autocomplete="off" />
          </el-form-item>

          <el-form-item label="User email" label-width="100px">
            <el-input
              v-model="todoForm.email"
              autocomplete="off"
              type="email"
            />
          </el-form-item>
        </el-form>

        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="confirmHandler">
              Confirm
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

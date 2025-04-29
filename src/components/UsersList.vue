<script setup lang="ts">
import { User } from '@/helpers/types'

const users = ref<User[]>([])
const dialogVisible = ref(false)
const editedUserId = ref<number | null>()
const userForm = reactive<Omit<User, 'id'>>({
  name: '',
  company: ''
})

const editUser = ({ name, company, id }: User) => {
  editedUserId.value = id
  dialogVisible.value = true
  userForm.name = name
  userForm.company = company
}

const deleteUser = (id: number) => {
  users.value = users.value.filter(user => user.id !== id)
}

const addUser = () => {
  users.value.push({
    id: Date.now(),
    ...userForm
  })
}

const saveUser = () => {
  const user = users.value.find(u => u.id === editedUserId.value)
  if (user) {
    user.name = userForm.name
    user.company = userForm.company
  }
}

const confirmHandler = () => {
  editedUserId.value ? saveUser() : addUser()
  dialogVisible.value = false
}

watch(dialogVisible, v => {
  if (!v) {
    userForm.name = ''
    userForm.company = ''
    editedUserId.value = null
  }
})

onMounted(async () => {
  await useApi().users.getUsers({
    onSuccess: response => {
      users.value = response.map((user: any) => ({
        id: user.id,
        name: user.name,
        company: user.company.name
      }))
    }
  })
})
</script>

<template>
  <div class="wrapper">
    <div class="list-container">
      <el-table :data="users" max-height="300" empty-text="No data">
        <el-table-column
          prop="name"
          label="Name"
          min-width="150"
          show-overflow-tooltip
        />

        <el-table-column
          prop="company"
          label="Company"
          min-width="150"
          show-overflow-tooltip
        />

        <el-table-column label="Operations" width="150">
          <template #default="{ row }">
            <el-button size="small" @click.prevent="editUser(row)">
              Edit
            </el-button>

            <el-button
              type="danger"
              size="small"
              @click.prevent="deleteUser(row.id)"
            >
              Remove
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-button @click="dialogVisible = true">Add User</el-button>

      <!-- USER DIALOG -->

      <el-dialog v-model="dialogVisible" title="Edit user" width="500">
        <el-form :model="userForm">
          <el-form-item label="Name" label-width="100px">
            <el-input v-model="userForm.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Company" label-width="100px">
            <el-input v-model="userForm.company" autocomplete="off" />
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

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: min(600px, 100%);
}
</style>

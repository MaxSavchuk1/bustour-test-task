<script lang="ts" setup>
import { COOKIE_KEY } from '@/helpers/constants'

const { setCookie, getCookie, deleteCookie } = useCookiesCustom()

const form = reactive({
  value: '1',
  save: false
})
const isInitialized = ref(false) // нужно чтоб предотвратить повторную запись в cookie

watchEffect(() => {
  if (!isInitialized.value) {
    return
  }
  if (form.save) {
    if (form.value !== '') {
      setCookie(COOKIE_KEY, form.value, 15)
    }
  } else {
    deleteCookie(COOKIE_KEY)
  }
})

onMounted(() => {
  const cookie = getCookie(COOKIE_KEY)
  if (cookie) {
    form.value = cookie
    form.save = true
  }
  isInitialized.value = true
})
</script>

<template>
  <div class="form-container">
    <el-form :model="form" label-width="auto">
      <el-form-item>
        <el-checkbox v-model="form.save" name="save">
          Save value into cookies
        </el-checkbox>
      </el-form-item>

      <el-form-item label="Select value to save">
        <el-select v-model="form.value" placeholder="Please select your value">
          <el-option label="first value" value="1" />
          <el-option label="second value" value="2" />
          <el-option label="third value" value="3" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .el-form {
    width: 400px;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
}
</style>

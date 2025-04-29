<script setup lang="ts"></script>

<template>
  <div class="page-container">
    <cookies-setting />

    <users-list />

    <todos-list />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  & > div {
    padding: 32px 0;
  }
  & > div + div {
    border-top: 1px solid #000;
  }
}
</style>

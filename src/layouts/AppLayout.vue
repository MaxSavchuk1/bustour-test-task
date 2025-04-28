<script setup lang="ts">
const route = useRoute()
const { isLoading } = storeToRefs(useLoaderStore())

</script>

<template>
  <component :is="route.meta.layoutComponent">
    <slot />
  </component>

  <teleport to="body">
    <div v-if="isLoading" class="loader-wrapper">
      <div class="loader"></div>
    </div>
  </teleport>
</template>

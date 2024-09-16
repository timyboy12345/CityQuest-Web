<script setup lang="ts">
defineProps(['section']);
</script>

<template>
  <Width class="my-4">
    <IconList :items="section.item.icons" />
  </Width>
</template>

<style scoped>

</style>

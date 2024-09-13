<script setup lang="ts">
defineProps(['section']);
</script>

<template>
  <Width class="my-6">
    <Markdown :content="section.item.text"/>
  </Width>
</template>

<style scoped>

</style>

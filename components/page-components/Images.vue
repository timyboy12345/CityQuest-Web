<script setup lang="ts">

defineProps(['section']);
</script>

<template>
  <Width class="my-6">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <img alt="" class="rounded object-cover w-full h-full" :src="`https://data.arendz.nl/assets/${image.directus_files_id}`"
           v-for="image of section.item.images"/>
    </div>
  </Width>
</template>

<style scoped>

</style>

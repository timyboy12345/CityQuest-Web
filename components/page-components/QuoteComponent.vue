<script setup lang="ts">

defineProps(['section']);
</script>

<template>
  <Width class="my-8">
    <div class="mx-8 italic text-xl">
      <span class="opacity-20 text-4xl">"</span>
      {{ section.item.quote }}
      <span class="opacity-20 text-4xl absolute -mt-2 ml-2">"</span>
    </div>
  </Width>
</template>

<style scoped>

</style>

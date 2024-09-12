<script setup lang="ts">
defineProps(['section']);
</script>

<template>
  <div :style="{backgroundImage: `url('https://data.arendz.nl/assets/${section.item.image}')`}"
       class="flex flex-row items-end w-full h-96 bg-gray-200 overflow-hidden bg-cover -mt-8">
    <div class="mb-8 flex flex-col items-start bottom-10 mx-8 md:mx-auto flex-grow md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h1 v-if="section.item.title" class="font-bold text-white text-3xl">{{ section.item.title }}</h1>
      <p v-if="section.item.subtitle" class="text-white text-lg opacity-80">{{ section.item.subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>

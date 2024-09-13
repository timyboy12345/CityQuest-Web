<script setup lang="ts">
defineProps(['image', 'title', 'subtitle', 'lower'])
</script>

<template>
  <div :style="{backgroundImage: `url('https://data.arendz.nl/assets/${image}')`}"
       class="bg-gray-400 flex flex-row items-end w-full h-96 bg-gray-200 overflow-hidden bg-cover"
       :class="{'-mt-8': lower, 'mt-6': !lower}">
    <div
        class="mb-8 flex flex-col items-start bottom-10 mx-8 md:mx-auto flex-grow md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h1 v-if="title" class="font-bold text-white text-3xl">{{ title }}</h1>
      <p v-if="subtitle" class="text-white text-lg opacity-80">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>

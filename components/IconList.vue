<script setup lang="ts">
defineProps(['items'])
</script>

<template>
  <div class="grid gap-4 grid-cols-3">
    <div class="flex flex-col items-center text-center" v-for="item of items">
      <div v-if="item.icon" class="text-indigo-800 rounded-full bg-gray-200 flex items-center justify-center mb-2 w-10 h-10 text-xl material-symbols-outlined">
        {{ item.icon }}
      </div>
      <div v-if="item.title" class="bg-gray-200 text-gray-800 rounded-full py-1 px-3 mb-2">{{ item.title }}</div>
      <div class="opacity-70 text-sm">{{ item.content }}</div>
    </div>
  </div>
</template>

<style scoped>
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
}
</style>

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

    <div class="ml-12 mt-2 flex flex-row">
      <div v-if="section.item.name">- {{ section.item.name }}</div>
      <NuxtLink
          v-if="section.item.quest"
          :to="`/steden/${section.item.quest.id}`"
          class="ml-2 underline hover:no-underline opacity-60">
        {{ section.item.quest.name }}
      </NuxtLink>
    </div>
  </Width>
</template>

<style scoped>

</style>

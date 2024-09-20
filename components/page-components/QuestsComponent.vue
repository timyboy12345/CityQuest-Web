<script setup>

defineProps(['section']);
</script>

<template>
  <Width class="my-6">
    <NuxtLink v-if="section.item.quests.length === 1"
              :to="`/steden/${section.item.quests[0].quest_id.id}`"
              class="flex flex-col sm:flex-row items-center gap-y-4 gap-x-8 p-4 -mx-4 rounded-xl border border-gray-100 hover:border-gray-300 transition duration-100">
      <img :alt="`Afbeelding van ${section.item.quests[0].quest_id.name}`"
           :src="`https://data.arendz.nl/assets/${section.item.quests[0].quest_id.image}?key=thumbnail`"
           class="rounded h-40 w-full sm:w-40 object-cover"/>

      <div class="flex flex-col">
        <div class="text-xl flex flex-row items-center gap-x-1 text-indigo-700 font-bold">
          {{ section.item.quests[0].quest_id.name }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path
                d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z"/>
            <path
                d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z"/>
          </svg>
        </div>
        <div class="opacity-60">{{ section.item.quests[0].quest_id.description }}</div>
      </div>
    </NuxtLink>

    <div class="grid lg:grid-cols-2 gap-4" v-else>
      <NuxtLink
          v-for="quest in section.item.quests"
          :to="`/steden/${quest.quest_id.id}`"
          class="quest-card flex lg:flex-col items-center lg:items-start gap-2 rounded-xl">
        <img v-if="quest.quest_id.image"
             :alt="`Afbeelding van ${quest.quest_id.name}`"
             :src="`https://data.arendz.nl/assets/${quest.quest_id.image}?key=thumbnail`"
             class="rounded h-40 w-40 lg:w-full object-cover"/>
        <div v-else class="rounded h-40 w-40 lg:w-full bg-gray-300"/>

        <div class="flex flex-col justify-start">
          <div class="quest-card-title text-xl flex flex-row items-center gap-x-1 text-indigo-700 font-bold">
            {{ quest.quest_id.name }}
          </div>
          <div class="opacity-60">{{ quest.quest_id.description }}</div>
        </div>
      </NuxtLink>
    </div>
  </Width>
</template>

<style scoped>
.quest-card .quest-card-title {
  text-decoration: underline;
}

.quest-card:hover .quest-card-title {
  text-decoration: none;
}
</style>

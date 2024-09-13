<script setup lang="ts">
defineProps(['section']);

const expandedFaqs = ref([]);

function toggleQuestion(i: number) {
  if (expandedFaqs.value.includes(i)) {
    const ind = expandedFaqs.value.indexOf(i);
    expandedFaqs.value[ind] = undefined;
  } else {
    expandedFaqs.value.push(i);
  }
}
</script>

<template>
  <Width class="my-8">
    <div class="flex flex-col text-left gap-y-2">
      <div v-for="(faq, i) of section.item.faqs"
           class="cursor-pointer hover:bg-opacity-90 transition duration-100 bg-gray-200 bg-opacity-50 flex flex-col rounded border border-gray-200 py-2 px-4"
           @click="toggleQuestion(i)">
        <div class="flex flex-row justify-between items-center">
          <div>Vraag: {{ faq.page_faq_id.question }}</div>
          <svg v-if="!expandedFaqs.includes(i)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
               fill="currentColor" class="size-4">
            <path
                d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"/>
          </svg>
        </div>

        <div class="opacity-70 mt-2" v-if="expandedFaqs.includes(i)">{{ faq.page_faq_id.answer }}</div>
      </div>
    </div>
  </Width>
</template>

<style scoped>

</style>

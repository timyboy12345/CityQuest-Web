<script setup lang="ts">

import exp from "constants";

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
      <div @click="toggleQuestion(i)" class="cursor-pointer hover:bg-gray-200 flex flex-col rounded border border-gray-200 py-2 px-4" v-for="(faq, i) of section.item.faqs">
        <div class="">Vraag: {{ faq.page_faq_id.question }}</div>
        <div class="" v-if="expandedFaqs.includes(i)">{{ faq.page_faq_id.answer }}</div>
      </div>
    </div>
  </Width>
</template>

<style scoped>

</style>

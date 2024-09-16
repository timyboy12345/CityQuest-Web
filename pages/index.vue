<script setup>
const {getItems} = useDirectusItems();

const fetchHomePage = async () => {
  try {
    return await getItems({
      collection: 'page',
      params: {
        fields: [
          '*.*',
          'sections.item:page_text.text',
          'sections.item:page_header.*',
          'sections.item:page_images.images.*',
          'sections.item:page_faqs.faqs.page_faq_id.*',
          'sections.item:page_quote.*',
          'sections.item:page_quote.quest.id',
          'sections.item:page_quote.quest.name',
          'sections.item:page_quests.quests.quest_id.*',
          'sections.item:page_icons.icons.*',
        ],
        filter: {
          slug: "/"
        }
      }
    }).then((r) => r[0])
  } catch (e) {
  }
};

const {data: pageData} = await useAsyncData('home', () => fetchHomePage());
</script>

<template>
  <Page v-if="pageData" :sections="pageData.sections"/>
  <div v-else class="mt-20">Laden...</div>
</template>

<style scoped>

</style>

<script setup>
const {getItems} = useDirectusItems();
const pageExists = ref(true)
const pageData = ref()
const route = useRoute()

const fetchPage = async () => {
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
          'sections.item:page_quote.quote',
          'sections.item:page_quests.quests.quest_id.*',
        ],
        filter: {
          slug: route.params.slug
        }
      }
    });
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error occurred while fetching page',
      data: e
    })
  }
};

const { data, error } = await useAsyncData(`page-${route.params.slug}`, () => fetchPage());

if (error.value) {
  console.error(error.value);
  throw error;
} else {
  if (data.value.length > 0) {
    pageData.value = data.value[0]
  } else {
    pageExists.value = false;
  }
}
</script>

<template>
  <Page v-if="pageData" :sections="pageData.sections"/>
  <div v-else-if="pageExists" class="mt-20">Laden...</div>
  <Width v-else class="mt-8">
    <h1 class="text-4xl font-bold">Pagina niet gevonden</h1>
  </Width>
</template>

<style scoped>

</style>

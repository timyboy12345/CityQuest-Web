<script setup lang="ts">
const {getItems} = useDirectusItems();
const pageExists = ref(true)
const pageData = ref()
const route = useRoute()

const fetchPage = async () => {
  try {
    pageData.value = await getItems({
      collection: 'page',
      params: {
        fields: [
          '*.*',
          'sections.item:page_text.text',
          'sections.item:page_images.images.*',
          'sections.item:page_faqs.faqs.page_faq_id.*',
          'sections.item:page_quote.quote',
          'sections.item:page_quests.quests.quest_id.*'
        ],
        filter: {
          slug: route.params.slug
        }
      }
    }).then((r) => {
      if (r.length >= 1) {
        return r[0]
      } else {
        pageExists.value = false;
        // throw createError({
        //   statusCode: 404,
        //   statusMessage: 'Page not found',
        // })
      }
    })
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error occured while fetching page',
      data: e
    })
  }
};

fetchPage();
</script>

<template>
  <Page v-if="pageData" :sections="pageData.sections"/>
  <div v-else-if="pageExists">Laden...</div>
  <div v-else>Pagina niet gevonden</div>
</template>

<style scoped>

</style>

<script setup>
import {useRobotsRule} from '#imports'

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
          'sections.item:page_quote.*',
          'sections.item:page_quote.quest.id',
          'sections.item:page_quote.quest.name',
          'sections.item:page_quests.quests.quest_id.*',
          'sections.item:page_icons.icons.*',
        ],
        filter: {
          slug: route.params.slug.join('/').replaceAll('//', '/')
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

const rule = useRobotsRule();

if (pageData.value && pageData.value.status === 'published') {
  rule.value = 'all';

  if (pageData.value.seo) {
    useHead({
      title: pageData.value.seo.title,
      meta: [
        {name: 'description', content: pageData.value.seo.description},
        {name: 'twitter:title', content: pageData.value.seo.title},
        {name: 'twitter:description', content: pageData.value.seo.description},
        {name: 'twitter:card', content: 'summary'},
      ],
    })

    if (pageData.value.seo.og_image) {
      useHead({
        meta: [
          {name: 'og:image', content: `https://data.arendz.nl/assets/${pageData.value.seo.og_image}`},
          {name: 'twitter:image', content: `https://data.arendz.nl/assets/${pageData.value.seo.og_image}`},
        ]
      })
    }
  }
} else {
  rule.value = 'noindex, nofollow';
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

<template>
  <div v-if="questData">
    <Header :image="questData.image" :title="questData.name" :subtitle="questData.description"></Header>
    <Width>
      <div class="my-4 py-2 px-4 rounded text-center border border-gray-300">
        <div v-if="questData.price > 0">Prijs: &euro;{{ formattedPrice }}</div>
        <div v-else>Gratis te krijgen in de app</div>
      </div>
      <Markdown v-if="questData.content" :content="questData.content"/>

      <a target="_blank"
         class="block mt-4 rounded bg-indigo-800 hover:bg-indigo-900 transition duration-100 text-white text-center py-2 px-4"
         :href="`https://app.storywalks.nl/shop/${questData.id}`">
        {{ questData.price > 0 ? 'Koop' : 'Krijg' }} in de winkel
      </a>
    </Width>
  </div>
</template>

<script setup>
import {computed} from "vue";

const {getItems} = useDirectusItems();
const pageExists = ref(true)
const questData = ref()
const route = useRoute()

const formattedPrice = computed(() => (Math.round(questData.value.price * 100) / 100).toFixed(2));
const fetchPage = async () => {
  try {
    return await getItems({
      collection: 'quest',
      params: {
        fields: [],
        filter: {
          id: route.params.id
        }
      }
    });
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error occurred while fetching city',
      data: e
    })
  }
};

const {data, error} = await useAsyncData(`city-${route.params.id}`, () => fetchPage());

if (error.value) {
  console.error(error.value);
  throw error;
} else {
  if (data.value.length > 0) {
    questData.value = data.value[0]
  } else {
    pageExists.value = false;
  }
}
</script>

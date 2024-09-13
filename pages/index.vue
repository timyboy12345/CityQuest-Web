<script setup lang="ts">
const {getItems} = useDirectusItems();
const pageData = ref()

const fetchHomePage = async () => {
  try {
    return await getItems({
      collection: 'page',
      params: {
        fields: ['*', 'sections.*', 'sections.item.*'],
        filter: {
          slug: "/"
        }
      }
    }).then((r) => r[0])
  } catch (e) {
  }
};

const {data} = await useAsyncData('home', () => fetchHomePage());
pageData.value = data.value;
</script>

<template>
  <Page v-if="pageData" :sections="pageData.sections"/>
  <div v-else class="mt-20">Laden...</div>
</template>

<style scoped>

</style>

<script setup lang="ts">
const {getItems} = useDirectusItems();
const pageData = ref()

const fetchHomePage = async () => {
  try {
    pageData.value = await getItems({
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

fetchHomePage();
</script>

<template>
  <Page v-if="pageData" :sections="pageData.sections"/>
  <div v-else class="mt-20">Laden...</div>
</template>

<style scoped>

</style>

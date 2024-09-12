<template>
  <div>
    <div v-if="menuItems" class="flex flex-row mx-8 md:mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-3xl gap-x-4 my-4">
      <NuxtLink v-for="item of menuItems" :to="item.slug">
        {{ item.title }}
      </NuxtLink>
      <a href="https://app.storywalks.nl/" class="ml-auto">App</a>
    </div>

    <div class="flex flex-col items-center justify-stretch">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
const {getItems} = useDirectusItems();
const menuItems = ref([])

const fetchHomePage = async () => {
  try {
    menuItems.value = await getItems({
      collection: 'page',
      params: {
        filter: {
          "in_menu": true
        }
      }
    })
  } catch (e) {
  }
};

fetchHomePage();
</script>

<style>
body {
  background: theme('colors.gray.100');
}
</style>

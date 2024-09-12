<template>
  <div>
    <div class="absolute w-full">
      <div v-if="menuItems"
           :class="{'text-gray-200': route.fullPath === '/'}"
           class="md:w-full flex flex-row mx-8 md:mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-3xl gap-x-4 my-4">
        <NuxtLink v-for="item of menuItems" :to="item.slug">
          {{ item.title }}
        </NuxtLink>
        <a target="_blank" href="https://app.storywalks.nl/" class="ml-auto flex flex-row items-center gap-x-1">
          App
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path
                d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z"/>
            <path
                d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="flex flex-col items-center justify-stretch pt-8 mb-8">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
const {getItems} = useDirectusItems();
const menuItems = ref([])
const route = useRoute();

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

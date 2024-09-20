<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="absolute w-full overflow-scroll whitespace-pre">
      <div v-if="menuItems"
           :class="{'text-gray-200': route.fullPath === '/'}"
           class="md:w-full flex flex-row mx-8 md:mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-3xl gap-x-4 my-4">
        <NuxtLink :class="{'opacity-100': route.fullPath == fixSlashes(item.slug)}" class="opacity-70 hover:opacity-100" v-for="item of topMenu" :to="fixSlashes(item.slug)">
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

    <div class="flex flex-col items-stretch pt-8 mb-4">
      <NuxtPage/>
    </div>

    <div class="w-full bg-gray-200">
      <Width class="py-4 text-gray-600 text-sm">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="col-span-2 md:col-span-2 flex flex-col">
            <h3 class="text-lg font-bold font-sansita">Over StoryWalks</h3>
            <p>StoryWalks is dé aanbieder van interactieve GPS-tochten in Nederland, samen met vrienden, familie of
              alleen.</p>
          </div>

          <div class="flex flex-col">
            <RouterLink to="/steden" class="underline hover:no-underline">Steden</RouterLink>
            <a class="underline hover:no-underline" target="_blank" href="https://app.storywalks.nl">App</a>
            <!--            <a class="underline" href="https://www.facebook.com/profile.php?id=100079089414321"-->
            <!--               target="_blank">Facebook</a>-->
            <!--            <a class="underline" href="https://instagram.com/drankidee/" target="_blank">Instagram</a>-->
          </div>

          <div class="flex flex-col">
            <RouterLink v-for="link of bottomMenu"
                        :to="link.slug[0] === '/' ? link.slug : '/' + link.slug"
                        class="hover:no-underline underline">
              {{ link.title }}
            </RouterLink>
          </div>
        </div>

        <div class="mt-2">
          Gemaakt met ❤️ door Tim - <a class="underline text-gray-800" target="_blank"
                                       href="https://arendz.nl/?utm_source=drankidee&amp;utm_medium=backlink">Arendz.nl</a>
        </div>
      </Width>
    </div>
  </div>
</template>

<script setup lang="ts">
const {getItems} = useDirectusItems();
const route = useRoute();

const fetchMenuLinks = async () => {
  try {
    return await getItems({
      collection: 'page',
      params: {
        filter: {
          "in_menu": {
            "_nnull": true
          }
        }
      }
    })
  } catch (e) {
  }
};

const {data: menuItems, error} = await useAsyncData('menu-links', () => fetchMenuLinks());

const topMenu = menuItems.value.filter((s) => s.in_menu.includes('top'));
const bottomMenu = menuItems.value.filter((s) => s.in_menu.includes('bottom'));

function fixSlashes(slug) {
  return slug[0] === '/' ? slug : '/' + slug
}
</script>

<style>
body {
  background: theme('colors.gray.100');
}
</style>

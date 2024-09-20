<template>
  <div v-if="questData">
    <Header :image="`${questData.image}?key=header`" :title="questData.name" :subtitle="questData.description"></Header>
    <Width>
      <div class="my-4 py-2 px-4 rounded text-center border border-gray-300">
        <div v-if="questData.price > 0">Prijs: &euro;{{ formattedPrice }}</div>
        <div v-else>Gratis te krijgen in de app</div>
      </div>
      <Markdown v-if="questData.content" :content="questData.content"/>

      <a target="_blank"
         class="block mt-4 rounded bg-indigo-800 hover:bg-indigo-900 transition duration-100 text-white text-center py-2 px-4"
         :href="`https://app.storywalks.nl/shop/${questData.id}#buy`">
        {{ questData.price > 0 ? 'Koop' : 'Krijg' }} in de winkel
      </a>

      <div class="my-8">
        <!--        <h2 class="text-center font-bold text-indigo-800 mb-2 text-xl">Waarom StoryWalks?</h2>-->
        <IconList :items="listItems"/>
      </div>

      <div class="bg-gray-200 p-4 rounded text-gray-800">
        <div class="">Voorwaarden</div>
        <div class="text-sm opacity-80">
          Na de aankoop (en eventuele succesvolle betaling) is de route (het avontuur/de quest) meteen te vinden in de
          online app. Je hebt 365 dagen om de route te voltooien, en zodra je start met een route heb je nog 24 uur. Per
          groep is er maar één aankoop vereist, maar ga je met meerdere groepen, dan dien je de stad via verschillende
          accounts te kopen.
        </div>
      </div>

      <div v-if="questData.start_location || questData.accessibility"
           class="w-full flex flex-col md:flex-row items-center justify-between gap-4 my-4">
        <div class="w-full h-64 overflow-hidden rounded bg-gray-200" v-if="questData.start_coordinates">
          <ClientOnly>
            <LMap
                ref="map"
                :zoom="zoom"
                :center="coordinates"
                :use-global-leaflet="false"
            >
              <LTileLayer
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                  attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                  layer-type="base"
                  name="OpenStreetMap"
              />
              <LMarker
                  :lat-lng="coordinates"
              />
            </LMap>
          </ClientOnly>
        </div>
        <div class="w-full" v-if="questData.accessibility">
          <h3 class="font-bold">Bereikbaarheid</h3>
          <article class="prose max-w-none prose-sm" v-html="questData.accessibility"></article>
        </div>
      </div>
    </Width>
  </div>
</template>

<script setup>
import {computed} from "vue";

const {getItems} = useDirectusItems();
const pageExists = ref(true)
const questData = ref()
const route = useRoute()
const zoom = ref(14)

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

const coordinates = computed(() => questData.value.start_coordinates.coordinates.slice().reverse())

const listItems = ref([{
  title: 'Flexibel plannen',
  content: 'Je zit niet vast aan een specifiek tijdstip. Regent het of wil je het verzetten? Je kan gewoon op een ander moment beginnen.'
}, {
  title: 'Helemaal zelf begeleid',
  content: 'Nooit wachten op een medewerker op locatie, je kan het helemaal zelf! En loop je alsnog vast? De app biedt altijd hulp!'
}, {
  title: 'Makkelijk te starten',
  content: 'Geen speciale dingen nodig, geen dure telefoon vereist, geen constante 5G-verbinding nodig, 1x laden is vaak genoeg.'
}])

defineOgImageComponent('NuxtSeo', {
  title: questData.value.title,
  description: questData.value.description,
  theme: '#4338ca',
  colorMode: 'light',
})
</script>

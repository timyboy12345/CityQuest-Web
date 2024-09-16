<script setup lang="ts">
// @ts-ignore
import Header from "~/components/page-components/HeaderComponent.vue";
// @ts-ignore
import Text from "~/components/page-components/TextComponent.vue";
// @ts-ignore
import Images from "~/components/page-components/ImagesComponent.vue";
// @ts-ignore
import Faqs from "~/components/page-components/FaqsComponent.vue";
// @ts-ignore
import Quote from "~/components/page-components/QuoteComponent.vue";
// @ts-ignore
import Quests from "~/components/page-components/QuestsComponent.vue";
// @ts-ignore
import IconsComponent from "~/components/page-components/IconsComponent.vue";

defineProps(['sections']);

function getComponent(c: any) {
  switch (c.collection) {
    case 'page_header':
      return Header;
    case 'page_text':
      return Text;
    case 'page_images':
      return Images;
    case 'page_quests':
      return Quests;
    case 'page_quote':
      return Quote;
    case 'page_faqs':
      return Faqs;
    case 'page_icons':
      return IconsComponent;
    default:
      return 'div';
  }
}
</script>

<template>
  <component v-for="(comp, i) of sections"
             :section="comp"
             :index="i"
             :is="getComponent(comp)"
  >{{ comp }}</component>
</template>

<style scoped>

</style>

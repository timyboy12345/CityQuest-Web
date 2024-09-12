<script setup lang="ts">
// @ts-ignore
import Header from "~/components/page-components/Header.vue";
// @ts-ignore
import Text from "~/components/page-components/Text.vue";
// @ts-ignore
import Images from "~/components/page-components/Images.vue";
// @ts-ignore
import Faqs from "~/components/page-components/Faqs.vue";
// @ts-ignore
import Quote from "~/components/page-components/Quote.vue";
// @ts-ignore
import Quests from "~/components/page-components/Quests.vue";

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
    default:
      return 'div';
  }
}
</script>

<template>
  <component v-for="comp of sections"
             :section="comp"
             :is="getComponent(comp)"
  >{{ comp }}</component>
</template>

<style scoped>

</style>

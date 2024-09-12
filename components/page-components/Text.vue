<script setup lang="ts">
import markdownit from 'markdown-it';

defineProps(['section']);
const markdown = new markdownit();
</script>

<template>
  <Width class="my-8">
    <div class="prose max-w-none" v-html="markdown.render(section.item.text)"/>
  </Width>
</template>

<style scoped>

</style>

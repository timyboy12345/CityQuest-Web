<script setup lang="ts">
import markdownit from 'markdown-it';

defineProps(['content'])
const markdown = new markdownit();
</script>

<template>
  <div v-if="content" class="prose max-w-none" v-html="markdown.render(content)"/>
  <div v-else>Geen content gespecificeerd</div>
</template>

<style scoped>

</style>

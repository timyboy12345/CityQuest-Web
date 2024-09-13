<script setup lang="ts">
import Header from "~/components/Header.vue";

defineProps(['section', 'index']);
</script>

<template>
  <Header :lower="index === 0" :title="section.item.title" :subtitle="section.item.subtitle" :image="section.item.image"  />
</template>

<style scoped>

</style>

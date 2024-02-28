<script setup>
import { useHead, useSeoMeta } from "@unhead/vue";
import HelloWorld from "./components/HelloWorld.vue";

useHead({
  title: "About",
  description: "My about pageeeeeee",
});

useSeoMeta({
  title: "About",
  description: "My about pageeeeeee",
  ogDescription: "Still about my about page",
  ogTitle: "About",
  ogImage: "http://localhost:5173/spa-social-test/test.jpeg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue Patata" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

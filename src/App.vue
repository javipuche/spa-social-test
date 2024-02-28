<script setup>
import { useSeoMeta } from "unhead";
import HelloWorld from "./components/HelloWorld.vue";

useSeoMeta({
  title: "About",
  description: "My about pageeeee",
  ogDescription: "Still about my about page",
  ogTitle: "About",
  ogImage: "/images/vite.svg",
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
  <HelloWorld msg="Vite + Vue" />
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

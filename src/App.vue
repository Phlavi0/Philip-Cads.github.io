<template>
  <Layout/>
  <Samp />
  <router-view></router-view>
</template>

<script setup>
  import Samp from "@/components/samp.vue"
  import Layout from "@/components/layouts/layout.vue";
</script>

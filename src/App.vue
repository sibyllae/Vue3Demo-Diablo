<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>
<script setup>
import Test from './components/Test.vue';
import Header from './components/MyHeader.vue';
import Footer from './components/MyFooter.vue';
</script>
<style scoped></style>

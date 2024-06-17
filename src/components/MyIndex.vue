<template lang="">
  <div>
    <h1>123</h1>
  </div>
</template>
<script setup>
import { inject } from 'vue'

const api = inject('$api', 'api')
console.log(api);
</script>
<style scoped>
  
</style>
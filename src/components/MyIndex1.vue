<template lang="">
  <section class="container">
    <div class="row">
      <div>
        <h1 style="color: red">index</h1>
        <form @submit.prevent="btn" action="">
          <input type="text" />
          <button>一個按鈕</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const $router = useRouter();


const btn = () => {
    $router.push('/APE.Diablo2R/Test')
};
</script>
<!-- <script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        btn(){
            this.$router.push('/APE.Diablo2R/Test')
        }
    },
};
</script> -->
<style lang=""></style>

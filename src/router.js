import { createRouter, createWebHistory } from "vue-router";
import MyIndex from "./components/MyIndex.vue";
import MyRuens from './components/ruen/MyRuens.vue';
import Test from './components/Test.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/APE.Diablo2R/",
      component: MyIndex,
    },
    {
      path: "/APE.Diablo2R/Ruens",
      component: MyRuens,
    },
    {
      path: "/APE.Diablo2R/Test",
      component: Test,
    },
  ],
});

export default router;

import { createWebHistory, createRouter } from "vue-router";

import HomeLayout from "@/layouts/HomeLayout.vue";
import TourView   from "@/menu/tour/TourView.vue";
import GuideView  from "@/menu/guide/GuideView.vue";
import SignUpView from "@/menu/profile/SignUpView.vue";

import { useTourStore } from "@/stores/tour";

import TourDetail from "@/menu/tour/TourDetail.vue";

const routes = [
    {
      path: "/",
      name: "HomeLayout",
      component: HomeLayout,
      beforeEnter: (to, from, next) => {
        const store = useTourStore();
        store.$reset;
        next();
      }
    },
    {
      path: "/tours",
      name: "TourView",
      component: TourView,
      beforeEnter: (to, from, next) => {
        const store = useTourStore();
        store.$reset;
        next();
      }
    },
    {
      path: "/guides",
      name: "GuideView",
      component: GuideView,
    },
    {
      path: "/profile",
      name: "SignUpView",
      component: SignUpView,
    },
    {
      path: "/TourDetail/:id",
      name: "TourDetail",
      component: TourDetail,
      beforeEnter: (to, from, next) => {
        const store = useTourStore();
        store.$reset;
        store.fetchTourbyId(to.params.id)
        .then(() => {
          next()
        })
      }
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(), routes });
  
export default router;
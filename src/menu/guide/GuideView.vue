<template>
  <div>
    <GuideList @open="popupOpen" ></GuideList>
  </div>
</template>

<script>
import { defineComponent,computed } from "vue";
import GuideList from '@/menu/guide/GuideList.vue';
import { useGuideStore } from '@/stores/guide'

// export default {
//   name: 'GuideView',
//   components: {
//     GuideList
//   },
//   emits: ['open'],
//   data() {
//     return {
//     }
//   },
//   created: function () {
//     this.$nextTick(function () {
//       this.$store.dispatch("fetchAllGuides")
//     })
//   },
//   methods: {
//     popupOpen: function() {
  
//     }
//   }
// }

export default defineComponent({
  name: 'GuideView',
  components: {
    GuideList,
  },
  emits: ['open'],
  setup() {
    const { fetchAllGuides } = useGuideStore()
    fetchAllGuides()
    return {
      popupOpen: () => {},
    }
  },
  methods: {
  }
});
</script>

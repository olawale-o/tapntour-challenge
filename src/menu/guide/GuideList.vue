<template>
  <div class="divide-y divide-slate-100 pt-5 cursor-pointer">
    <NavView>
      <NavItem href="" v-on:click:active=true isActive>New Guide</NavItem>
      <NavItem href="" v-on:click:active=true >Top Guide</NavItem>
    </NavView>
    <ListView>
      <p v-if="loading">Loading guides...</p>
      <p v-if="error">{{ error.message }}</p>
      <template v-if="guides">
        <GuideItem v-for="(item, index) in guides" :key="index" :item="item" />
      </template>
    </ListView>
  </div>
</template>

<script> 
  import { defineComponent,computed } from "vue"
  import { storeToRefs } from 'pinia'
  import { useGuideStore } from '@/stores/guide'
  import NavView from '@/components/NavView.vue'
  import NavItem from '@/components/NavItem.vue'
  import ListView from '@/components/ListView.vue'
  import GuideItem from '@/menu/guide/GuideItem.vue'

  export default defineComponent({
    components: {
    NavView,
    NavItem,
    ListView,
    GuideItem
  },
  setup() {
    const { guides, loading, error } = storeToRefs(useGuideStore())
    // const { fetchGuides } = useGuideStore();
    // fetchGuides();

    return  {
      guides,
      loading,
      error,
    }
  },
  methods: {

  }
})
</script>

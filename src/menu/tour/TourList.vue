<template>
  <div class="divide-y divide-slate-100 pt-5 cursor-pointer">
    <NavView>
      <NavItem href="" v-on:click:active=true  isActive>New Release</NavItem>
      <NavItem href="" v-on:click:active=true >Top Rated</NavItem>
      <NavItem href="" v-on:click:active=true >England</NavItem>
    </NavView>
    <ListView>
      <p v-if="loading">Loading tours...</p>
      <p v-if="error">{{ error.message }}</p>
      <template v-if="tours.length > 0">
        <TourItem v-for="(item, index) in tours" :key="index" :item="item" />
      </template>
      <template v-else>
        <p>Cannot fetch tours for now</p>
      </template>
    </ListView>
  </div>
</template>

<script> 
  import { defineComponent } from "vue";
  import { storeToRefs } from 'pinia'
  import { useTourStore } from '@/stores/tour'

  import TourItem from '@/menu/tour/TourItem.vue'
  import NavView from '@/components/NavView.vue'
  import NavItem from '@/components/NavItem.vue'
  import ListView from '@/components/ListView.vue'

  export default defineComponent({
    components: {
      NavView,
      NavItem,
      ListView,
      TourItem,
    },
    setup() {
      const { tours, loading, error } = storeToRefs(useTourStore())
      const { fetchTours } = useTourStore()

      fetchTours()
      return {
        tours,
        loading,
        error,
      }
    },
    methods: {
  
    }
});

</script>

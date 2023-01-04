<template>

  <div class="bg-black top-10 text-lg pt-10 w-full h-full">
    <div class="flex mb-2">
      <button @click="$router.go(-1)" type="submit" class="ml-2">
        <span class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </span>
      </button>
    </div> 
    <p v-if="error">{{ error.message }}</p>
    <template v-if="tour.length > 0">
        <article class="flex items-start space-x-6 p-6" v-for="(item, index) in tour" :key="index" :item="item">
          <img :src="item.image" :alt="item.name" class=" object-cover h-48 w-28 flex-none rounded-md bg-slate-100" />
          <div class="min-w-0 relative flex-auto">
            <h2 class="font-semibold text-slate-400 truncate pr-20">{{ item.name }}</h2>
            <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
              <div class="absolute top-0 right-0 flex items-center space-x-1">
                <dt class="text-sky-500">
                  <span class="sr-only">Star rating</span>
                  <svg width="16" height="20" fill="currentColor">
                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                  </svg>
                </dt>
                <dd class="text-slate-500">{{ parseInt(item.stop) }}</dd>
              </div>
            </dl>
            <DescriptionItem></DescriptionItem>
            <FeatureItem
              :stops="item.stop"
              :mode="item.mode"
              :duration="item.duration"
            />
          </div>
        </article>
    </template>
    <template v-else>
      <div class="flex mb-2">
        <span class="text-slate-500">Cannot fetch tour details for now</span>
      </div>
    </template>
    <div class="h-20" ></div>
  </div>
</template>
<script>
  import FeatureItem from '@/components/FeatureItem.vue'
  import DescriptionItem from '@/components/DescriptionItem.vue'
  import { storeToRefs } from 'pinia'
  import { useTourStore } from '@/stores/tour'
  export default {
    name: 'TourDetail',
    components: {
      FeatureItem,
      DescriptionItem
    },
    emits: ['open'],
    setup() {
      const { tour, loading, error } = storeToRefs(useTourStore());
      return {
        tour,
        loading,
        error,
      }
    }
  }

</script>

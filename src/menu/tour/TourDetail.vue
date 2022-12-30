<template>
  <!-- <div class="bg-black top-10 text-lg pt-10 w-full h-full">
    <div class="flex mb-2">
      <button @click="$router.go(-1)"  type="submit" class="ml-2">
        <span class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </span>
      </button>
      <span class="text-xl font-semibold ml-2 " >Cambridge</span>
    </div>      
    <div class="text-sm text-gray-400 font-light p-5">What action would you like to perform? </div>
      <div class="flex justify-center">
        <button type="button" class="mt-5 border border-gray-200 text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
          CheckOut with Apple Pay
          <svg class="ml-2 -mr-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
        </button>
      </div>  
    <div class="h-20" ></div>    
  </div> -->
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
    <article class="flex items-start space-x-6 p-6">
      <img :src="tour.image" alt="" class=" object-cover h-48 w-28 flex-none rounded-md bg-slate-100" />
      <div class="min-w-0 relative flex-auto">
        <h2 class="font-semibold text-slate-900 truncate pr-20">{{ tour.name }}</h2>
        <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div class="absolute top-0 right-0 flex items-center space-x-1">
            <dt class="text-sky-500">
              <span class="sr-only">Star rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </dt>
            <dd class="text-slate-500" >{{ tour.stops }}</dd>
          </div>
        </dl>
        <DescriptionItem></DescriptionItem>
        <FeatureItem></FeatureItem>
      </div>
    </article>
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

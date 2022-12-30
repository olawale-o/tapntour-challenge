import { defineStore } from 'pinia'

const guide_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/guides';

export const useGuideStore = defineStore({
  id: 'guide',
  state: () => ({
    guides: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchAllGuides() {
      this.guides = []
      this.loading = true
      try {
        this.guides = await fetch(
          guide_endpoint, {
          method: 'POST',
        })
        .then((response) => response.json())
        .then((data) => data)
      } catch (error) {
        console.log(error);
        this.error = error
      } finally {
        this.loading = false
      }
    },
  }
})
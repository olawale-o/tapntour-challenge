import { defineStore } from 'pinia'

const tour_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/tours';

export const useTourStore = defineStore({
  id: 'tour',
  state: () => ({
    tours: [],
    tour: null,
    loading: false,
    error: null
  }),
  getters: {
    getTourbyCountry: (state) => {
    }
  }, 
  actions: {
    async fetchTours() {
      this.tours = []
      this.loading = true
      try {
        this.tours = await fetch(tour_endpoint,{
          method: 'POST',
        })
        .then((response) => {
          return response.json()
        }).then((data) => {
          return data;
        })
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTourbyId(id) {
      this.tour = null
      this.loading = true
      try {
        this.tour = await fetch(`${tour_endpoint}/${id}`, {
          method: 'POST',
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          return data[0];
        })
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
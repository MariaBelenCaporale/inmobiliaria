import { defineStore } from 'pinia';

export const usePropertyStore = defineStore('property', {
  state: () => ({
    properties: [],
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 5,
  }),
  actions: {
    setProperties(properties) {
      this.properties = properties;
    },
    setSearchQuery(query) {
      this.searchQuery = query;
      this.currentPage = 1; // Reset to first page on search
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
  getters: {
    filteredProperties: (state) => {
      if (!state.searchQuery) {
        return state.properties;
      }
      return state.properties.filter((property) =>
        property.location.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    paginatedProperties: (state) => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.filteredProperties.slice(start, end);
    },
    totalPages: (state) => {
      return Math.ceil(state.filteredProperties.length / state.itemsPerPage);
    },
  },
});

<template>
  <div>
    <div class="property-list">
      <div v-for="property in properties" :key="property.id" class="property-card">
        <div class="img">
          <img :src="property.image" :alt="property.name" class="property-image" />
        </div>
        <div class="info">
          <h2>{{ property.name }}</h2>
          <p>{{ property.location }}</p>
          <p>{{ property.price }}</p>
          <p>{{ property.description }}</p>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { usePropertyStore } from '@/store/propertyStore';

export default defineComponent({
  setup() {
    const propertyStore = usePropertyStore();
    const properties = computed(() => propertyStore.paginatedProperties);
    const totalPages = computed(() => propertyStore.totalPages);
    const currentPage = computed(() => propertyStore.currentPage);

    const changePage = (page) => {
      propertyStore.setCurrentPage(page);
    };

    return {
      properties,
      totalPages,
      currentPage,
      changePage,
    };
  },
});
</script>

<style scoped>
.property-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.property-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 80%;
}

.info {
  width: 100%;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
}

.img {
  width: 50%;
}

.property-image {
  width: 100%;
  height: 250px;
  border-radius: 8px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
}

.pagination button.active {
  background-color: #007bff;
  color: white;
}
</style>

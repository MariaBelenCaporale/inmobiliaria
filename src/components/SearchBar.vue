<template>
  <div class="container-input">
  <input type="text" v-model="searchQuery" placeholder="Buscar" />
</div>
</template>

<script>
import { computed } from 'vue';
import { usePropertyStore } from '@/store/propertyStore';

export default {
  setup() {
    const propertyStore = usePropertyStore();
    const searchQuery = computed({
      get: () => propertyStore.searchQuery,
      set: (value) => propertyStore.setSearchQuery(value),
    });

    return {
      searchQuery,
    };
  },
};
</script>

<style scoped>
.container-input {

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
input {
  width: 80%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 16px 0;
}
</style>

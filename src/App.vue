<template>
  <div id="app">
    <SearchBar />
    <PropertyList />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import PropertyList from './components/PropertyList.vue';
import { usePropertyStore } from './store/propertyStore';
import { onMounted } from 'vue';

export default {
  components: {
    SearchBar,
    PropertyList,
  },
  setup() {
    const propertyStore = usePropertyStore();

    onMounted(async () => {
      const response = await fetch('/properties.json');
      const properties = await response.json();
      propertyStore.setProperties(properties);
    });

    return {};
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

@font-face {
  font-family: 'Poppins';
  src: url('@/assets/fonts/Poppins-Regular.ttf') format('truetype'),
       url('@/assets/fonts/Poppins-Bold.ttf') format('truetype'),
       url('@/assets/fonts/Poppins-Black.ttf') format('truetype'),
       url('@/assets/fonts/Poppins-ExtraLight.ttf') format('truetype'),
       url('@/assets/fonts/Poppins-Italic.ttf') format('truetype'),
       url('@/assets/fonts/Poppins-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>

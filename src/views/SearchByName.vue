<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div class="mt-8">
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue"; 


const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value){
  store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  if (route.params.name) {
    keyword.value = route.params.name;
    searchMeals();
  }
});
</script>

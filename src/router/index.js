import { createRouter, createWebHashHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByName from '../views/SearchByName.vue';
import MealDetails from '../views/MealDetails.vue';
import Ingredients from '../views/Ingredients.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/food-recipes/',
        name: 'home',
        component: Home
      },
      {
        path: '/food-recipes/by-name/:name?',
        name: 'byName',
        component: MealsByName
      },
      {
        path: '/food-recipes/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: '/food-recipes/ingredients',
        name: 'ingredients',
        component: Ingredients,
      },
      {
        path: '/food-recipes/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredient
      },
      {
        path: '/food-recipes/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      }
    ]
  },
  {
    path: '/food-recipes/guest',
    component: GuestLayout,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

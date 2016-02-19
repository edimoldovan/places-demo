import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import HomeView from './components/home.vue'
import RestaurantsView from './components/restaurants.vue'
import AddView from './components/add.vue'
import RestaurantDetailView from './components/restaurant-detail.vue'

// install router
Vue.use(Router)

// routing
var router = new Router({
  linkActiveClass: 'active'
})

router.map({
  '/': {
    component: HomeView
  },
  '/restaurants': {
    component: RestaurantsView,
    name: 'restaurants',
    subRoutes: {
      '/': {
        component: {
          template: '<div class="empty">Choose a restaurant on the left side</div>'
        }
      },
      '/:id': {
        component: (resolve) => {
          resolve(RestaurantDetailView)
        },
        name: 'restaurant-detail'
      },
      '/add': {
        component: AddView,
        name: 'add'
      }
    }
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.start(App, '#app')

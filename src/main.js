import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import HomeView from './components/home.vue'
import RestaurantsView from './components/restaurants.vue'
import ContactView from './components/contact.vue'
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
    subRoutes: {
      '/': {
        component: {
          template: '<p>Choose a restaurant on the left side</p>'
        }
      },
      '/:id': {
        component: (resolve) => {
          resolve(RestaurantDetailView)
        },
        name: 'restaurant-detail'
      }
    }
  },
  '/contact': {
    component: ContactView
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.start(App, '#app')

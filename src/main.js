import Vue from 'vue'
import Router from 'vue-router'

import App from './components/App.vue'
import UserList from './components/listUsers.vue'
import AddPerson from './components/addPerson.vue'
import Home from './components/home.vue'


Vue.use(Router)

Vue.component('home-header', Home)

const routes = [
  {path : '/personlist', component : UserList},
  {path : '/createperson', component : AddPerson},
  {path : '/', component : UserList}
]

const router = new Router ({
    routes
})



new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import User from '../views/User.vue'
import Created from '../views/Created.vue'
import Complete from '../views/Complete.vue'
import TaskCenter from '../views/TaskCenter.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/created',
      name: 'created',
      component: Created
    }, 
    {
      path: '/complete',
      name: 'complete',
      component: Complete
    }, 
    {
      path: '/task-center',
      name: 'complete',
      component: TaskCenter
    }
  ]
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
// import FindMusic from '../views/FindMusic'
// import MyMusic from '../views/MyMusic'
const FindMusic = (resolve) => {
  import('../views/FindMusic').then((moduel) => {
    resolve(moduel)
  })
}
const MyMusic = (resolve) => {
  import('../views/MyMusic').then((moduel) => {
    resolve(moduel)
  })
}
const LogIn = (resolve) => {
  import('../views/LogIn').then((moduel) => {
    resolve(moduel)
  })
}
const Detail = (resolve) => {
  import('../views/Detail').then((moduel) => {
    resolve(moduel)
  })
}
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:"FindMusic"
  },
  {
    path:'/LogIn',
    component:LogIn
  },
  {
    path:'/FindMusic',component:FindMusic,
    children:[
      {
        path:'detail/:id/:type',
        component:Detail
      }
    ]
  },
  {
    path:'/MyMusic',component:MyMusic
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)
const components={
  layout:()=>import('@/views/layout'),
  index:()=>import('@/views/index/index'),
  register:()=>import('@/views/register/register'),
  editor:()=>import('@/views/editor/editor'),
}



const router=new Router({
  routes: [
    {
      path: '/',
      component:components.layout,
      redirect:'/index',
      children:[
        {
          path: 'index',
          component:components.index
        },
        {
          path: 'editor',
          component:components.editor
        },
        {
          path:'/register',
          component:components.register
        }
      ]
    },

  ]
})

router.beforeEach((to,from,next)=>{
  nprogress.start()
  next()
})
router.afterEach((to,from)=>{
  nprogress.done()
})
export default router

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: '/hi',
      components: {
        default: Hi,
        left: Hi1,
        right: Hi2
      },
      children: [
        {path: '/', component: Hi},
        {path: 'hi1', name: 'Hi1', component: Hi1},
        {path: 'hi2', name: 'Hi2', component: Hi2}
      ]
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log('我进入了params模板')
        console.log(to)
        console.log(from)
        next()
      }
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/goback',
      redirect: '/'
    },
    {
      path: '/hi1',
      component: Hi1,
      alias: '/home'
    },
    {
      path: '*',
      component: Error
    }
  ]
})

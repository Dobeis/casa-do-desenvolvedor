import Vue from 'vue'
import Router from 'vue-router'
// Principal =============
import Home from '@/components/routes/Home'
// Setores =============
import DFe from '@/components/routes/DFe'
import Academy from '@/components/routes/Academy'
// Squads =============
import Industria from '@/components/dfe/squads/industria'
import Escrituracao from '@/components/dfe/squads/escrituracao-fiscal'
import Servicos from '@/components/dfe/squads/servicos'
import Transporte from '@/components/dfe/squads/transporte'
import Varejo from '@/components/dfe/squads/varejo'
// Produtos ===========
import NFe from '@/components/dfe/squads/industria/produtos/nfe'

// Outros =============
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1200,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dfe',
      name: 'DFe',
      component: DFe
    },
    {
      path: '/academy',
      beforeEnter () { location.href = 'http://www.tecnospeed.com.br/nf-e/' },
      name: 'Academy',
      component: Academy
    },
    {
      path: '/squads/escrituracao-fiscal',
      name: 'Escrituracao',
      component: Escrituracao
    },
    {
      path: '/squads/industria',
      name: 'Industria',
      component: Industria
    },
    {
      path: '/squads/servicos',
      name: 'Servicos',
      component: Servicos
    },
    {
      path: '/squads/transporte',
      name: 'Transporte',
      component: Transporte
    },
    {
      path: '/squads/varejo',
      name: 'Varejo',
      component: Varejo
    },
    {
      path: '/squads/industria/nfe',
      name: 'NFe',
      component: NFe
    }
  ]
})

router.beforeEach(function (to, from, next) {
  to.matched.some(record => console.log(record.path))
  window.scrollTo(0, 0)
  next()
})

export default router

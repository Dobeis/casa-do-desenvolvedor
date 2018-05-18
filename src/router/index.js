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
import Fintech from '@/components/dfe/squads/fintech'
// Produtos ===========
// Industria
import NFe from '@/components/dfe/squads/industria/produtos/nfe'
import MDFeIndustria from '@/components/dfe/squads/industria/produtos/mdfe'
import GNRe from '@/components/dfe/squads/industria/produtos/gnre'
import NotaSegura from '@/components/dfe/squads/industria/produtos/notasegura'
import SaaS from '@/components/dfe/squads/industria/produtos/saas'
// Varejo
import NFCe from '@/components/dfe/squads/varejo/produtos/nfce'
import CFe from '@/components/dfe/squads/varejo/produtos/cfe'
// Serviço
import NFSe from '@/components/dfe/squads/servicos/produtos/nfse'
// Transporte
import CTe from '@/components/dfe/squads/transporte/produtos/cte'
import CTeOS from '@/components/dfe/squads/transporte/produtos/cteos'
import MDFeTransporte from '@/components/dfe/squads/transporte/produtos/mdfe'
// Escrituração Fiscal
import EFDReinf from '@/components/dfe/squads/escrituracao-fiscal/produtos/efd-reinf'
import Esocial from '@/components/dfe/squads/escrituracao-fiscal/produtos/esocial'
import SPED from '@/components/dfe/squads/escrituracao-fiscal/produtos/sped'
// Fintech
import Boleto from '@/components/dfe/squads/fintech/produtos/boleto'

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
  mode: 'history',
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
      path: '/squads/fintech',
      name: 'Fintech',
      component: Fintech
    },
    {
      path: '/squads/industria/nfe',
      name: 'NFe',
      component: NFe
    },
    {
      path: '/squads/industria/mdfe',
      name: 'MDFeIndustria',
      component: MDFeIndustria
    },
    {
      path: '/squads/industria/gnre',
      name: 'GNRe',
      component: GNRe
    },
    {
      path: '/squads/industria/notasegura',
      name: 'NotaSegura',
      component: NotaSegura
    },
    {
      path: '/squads/industria/saas',
      name: 'SaaS',
      component: SaaS
    },
    {
      path: '/squads/varejo/nfce',
      name: 'NFCe',
      component: NFCe
    },
    {
      path: '/squads/varejo/cfe',
      name: 'CFe',
      component: CFe
    },
    {
      path: '/squads/varejo/nfe',
      name: 'NFe',
      component: NFe
    },
    {
      path: '/squads/varejo/gnre',
      name: 'GNRe',
      component: GNRe
    },
    {
      path: '/squads/servicos/nfse',
      name: 'NFSe',
      component: NFSe
    },
    {
      path: '/squads/transporte/cte',
      name: 'CTe',
      component: CTe
    },
    {
      path: '/squads/transporte/mdfe',
      name: 'MDFeTransporte',
      component: MDFeTransporte
    },
    {
      path: '/squads/transporte/cteos',
      name: 'CTeOS',
      component: CTeOS
    },
    {
      path: '/squads/escrituracao-fiscal/efdreinf',
      name: 'EFDReinf',
      component: EFDReinf
    },
    {
      path: '/squads/escrituracao-fiscal/esocial',
      name: 'Esocial',
      component: Esocial
    },
    {
      path: '/squads/escrituracao-fiscal/sped',
      name: 'SPED',
      component: SPED
    },
    {
      path: '/squads/fintech/boleto',
      name: 'Boleto',
      component: Boleto
    }
  ]
})

router.beforeEach(function (to, from, next) {
  to.matched.some(record => console.log(record.path))
  window.scrollTo(0, 0)
  next()
})

export default router

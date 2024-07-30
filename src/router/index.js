import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/home/index.vue')
const Login = () => import('@/views/login/index.vue')
const XfServiceList = () => import('@/views/xfServiceList/index.vue')
const SourceList = () => import('@/views/sourceList/index.vue')
const ZzServiceList = () => import('@/views/zzServiceList/index.vue')

const LoadError = () => import('@/views/loadError/index.vue')
const NetworkError = () => import('@/views/networkError/index.vue')
const NotConnected = () => import('@/views/notConnected/index.vue')
const MissPage = () => import('@/views/common/404.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '续费服务首页',
    },
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/xfServiceList',
    component: XfServiceList,
    meta: {
      title: '续费服务列表',
    },
  },
  {
    path: '/sourceList',
    component: SourceList,
    meta: {
      title: '信源列表',
    },
  },
  {
    path: '/zzServiceList',
    component: ZzServiceList,
    meta: {
      title: '增值服务列表',
    },
  },
  {
    path: '/loadError',
    component: LoadError,
    meta: {
      title: '数据加载失败',
    },
  },
  {
    path: '/networkError',
    component: NetworkError,
    meta: {
      title: '网络异常',
    },
  },
  {
    path: '/notConnected',
    component: NotConnected,
    meta: {
      title: '未接入支付',
    },
  },
  {
    path: '/404',
    component: MissPage
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/LogadoLayout.vue'),
    children: [
      { path: '', name: "index", meta: { login: true }, component: () => import('src/pages/IndexPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('src/layouts/DeslogadoLayout.vue'),
    children: [
      { path: 'login', name: "login", component: () => import('pages/LoginPage.vue') }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes


const routes = [
  {
    path: '/',
    component: () => import('src/layouts/LogadoLayout.vue'),
    redirect: '/onboarding',
    children: [
      { path: 'onboarding', name: "onboarding", meta: { login: true }, component: () => import('src/pages/OnboardingPage.vue') },
      { path: 'team', name: "team", meta: { login: true }, component: () => import('src/pages/TeamPage.vue') },
      { path: 'parttime', name: "parttime", meta: { login: true }, component: () => import('src/pages/PartTimePage.vue') },
      { path: 'extras', name: "extras", meta: { login: true }, component: () => import('src/pages/ExtrasPage.vue') }
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

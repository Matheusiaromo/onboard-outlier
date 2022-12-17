
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/LogadoLayout.vue'),
    redirect: '/onboarding',
    children: [
      { path: 'welcome', name: "welcome", meta: { login: true }, component: () => import('src/pages/WelcomePage.vue') },
      { path: 'onboarding', name: "onboarding", meta: { login: true }, component: () => import('src/pages/OnboardingPage.vue') },
      { path: 'team', name: "team", meta: { login: true }, component: () => import('src/pages/TeamPage.vue') },
      { path: 'parttime', name: "parttime", meta: { login: true }, component: () => import('src/pages/PartTimePage.vue') },
      { path: 'movies', name: "movies", meta: { login: true }, component: () => import('src/pages/MoviesPage.vue') }
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

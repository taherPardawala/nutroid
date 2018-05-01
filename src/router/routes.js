
export default [
  {
    path: '/',
    component: () => import('layouts/Application'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'chat', component: () => import('pages/ChatContainer') },
      { path: 'products', component: () => import('pages/ProdcutsContainer') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]

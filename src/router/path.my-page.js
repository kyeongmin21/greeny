const addRoute =
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "myPage" */ '@/views/myPage/Login'),
    meta: {
      layout: 'NoneLayout'
    },
  }

  export default addRoute